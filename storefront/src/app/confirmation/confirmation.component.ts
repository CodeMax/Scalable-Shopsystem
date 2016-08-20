import {Component, OnInit} from '@angular/core';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import {CORE_DIRECTIVES} from '@angular/common';
import {BackendcallService} from './../backendcall.service';
import {LoginService} from './../login.service';
import {TokenService} from './../token.service';
import {Router} from '@angular/router';
import {Shoppingcart} from './../shoppingcart/shoppingcart.service';
import {JwtHelper} from 'angular2-jwt';

@Component({
    selector: 'as-confirmation',
    templateUrl: 'app/confirmation/confirmation.html',
    directives: [CORE_DIRECTIVES],
    viewProviders: [HTTP_PROVIDERS],
    styleUrls: ['app/articleCheckout/articleCheckout.css']
})

export class ConfirmationComponent implements OnInit {

    private jwtHelper: JwtHelper = new JwtHelper();
    private totalOfCart: number;
    private totalOfCartNetto: number;


    constructor(private _http: Http, private _loginService: LoginService,
        private _tokenService: TokenService, private _router: Router) {
        _loginService.loginNeeded$.subscribe(
            needForLogin => {
                needForLogin = true;
            });
    }


    ngOnInit() {
        console.log('init start');
        this.totalOfCart = 0;
        this.totalOfCartNetto = 0;
        if (this._tokenService.getToken() !== undefined) {
            new BackendcallService(this._http, 'token', this._tokenService.getToken(),
                'http://192.168.99.100:8084/shoppingcart/' +
                (this.jwtHelper.decodeToken(this._tokenService.getToken())).userId)
                .getAllShoppingcartItems()
                .subscribe((data: Shoppingcart[]) => console.log('getshoppingcart success: ' + JSON.stringify(data)),
                error => this.handleError(error),
                () => console.log('Get all Items complete'));
        } else {
            console.log('else: setLogin true');
            this._loginService.setLogin(true);
        }
    }


    handleError(error: any) {
        if (error.status === 401) {
            this._loginService.setLogin(true);
        }
        if (error.status === 404) {
            this._router.navigate(['/']);
        }
    }

    confirm() {
        alert('Ihre Bestellung wurde aufgegeben.');
        this._router.navigate(['/']);
    }

}
