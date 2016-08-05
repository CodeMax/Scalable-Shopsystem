import {Component} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import {CORE_DIRECTIVES} from '@angular/common';
import {BackendcallService} from './../backendcall.service';
import {TokenService} from './../token.service';
import {LoginService} from './../login.service';
import {User} from './../user.service';
import {JwtHelper} from 'angular2-jwt';

@Component({
    selector: 'as-kebab-case',
    templateUrl: 'app/profile/profile.html',
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES],
    viewProviders: [HTTP_PROVIDERS]
})

export class ProfileComponent {

    private _userId: Number;
    private _userModel: User;
    private jwtHelper: JwtHelper = new JwtHelper();

    constructor(private _http: Http, private _router: Router,
        private _tokenService: TokenService, private _loginService: LoginService) {
        this._userModel = new User(0, '', '', '', '', '', '', '', '', 0, 0);
        _loginService.loginNeeded$.subscribe(
            needForLogin => {
                needForLogin = true;
            });
        if (this._tokenService.getToken() == null) {
            this.handleError('loginNeeded');
        } else {
            this._userId = (this.jwtHelper.decodeToken(this._tokenService.getToken())).userId;
            new BackendcallService(this._http, 'token', this._tokenService.getToken(), 'http://192.168.99.100:8087/user/'
                + this._userId).getUserData().subscribe((data: User) => this.setupUser(data),
                error => this.handleError(error));
        }
    }

    onSubmitProfileUpdate() { // username: string, firstname: string, lastname: string,
        // password: string, address: string, postcode: string, city: string, country: string) {
        // this._userModel = new User(this._userId, username, firstname, lastname, password, address, postcode, city, country, 0);
        new BackendcallService(this._http, 'token', this._tokenService.getToken(), 'http://192.168.99.100:8087/user/' + this._userId)
            .updateUserData(this._userModel.id, this._userModel.firstname, this._userModel.lastname, this._userModel.address,
            this._userModel.postcode, this._userModel.city, this._userModel.country)
            .subscribe((data: User) => this.onRegisterSuccess(),
            error => console.log(<any>error));
    }

    setupUser(user: User) {
      this._userModel = user;
      this._userModel.username = (this.jwtHelper.decodeToken(this._tokenService.getToken())).username;
    }

    handleError(error: any) {
        this._loginService.setLogin(true);
    }

    onRegisterSuccess() {
        alert('Erfolgreich angemeldet.');
        this._router.navigateByUrl('/');
    }
}
