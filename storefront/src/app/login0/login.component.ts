import {Component} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from '@angular/common';
import {Router} from '@angular/router';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import {BackendcallService} from './../backendcall.service';
import {TokenService, Token} from './../token.service';

@Component({
    selector: 'as-login',
    templateUrl: 'app/login/login.html',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
    viewProviders: [HTTP_PROVIDERS],
    providers: [TokenService]
})

export class LoginComponent {

    submitted = false;
    private tokenservice: TokenService;
    private username: string;
    private password: string;

    constructor(private _http: Http, private _router: Router, private _tokenService: TokenService) {
      this.tokenservice = _tokenService;
    }

    onSubmit(username, password) {
        this.submitted = true;
        console.log(this.username + ', ' + this.password);
        this.authenticateForToken(this.username, this.password);
        this._router.navigateByUrl('/');
    }

    authenticateForToken(user: string, pw: string) {
       new BackendcallService(this._http, user, pw, 'http://192.168.99.100:8088/authentication')
                .getToken().then((data: Token) => this._tokenService.saveToken(data))
                .then(() => console.log(this._tokenService.getToken()));
    }

}
