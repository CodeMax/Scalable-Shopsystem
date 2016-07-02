import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import {CORE_DIRECTIVES} from '@angular/common';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {BackendcallService} from './../backendcall.service';
import {TokenService, Token} from './../token.service';

@Component({
    selector: 'as-kebab-case', // as-articleInventory
    templateUrl: 'app/register/register.html',
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES],
    viewProviders: [HTTP_PROVIDERS]
})

export class RegisterComponent {

    constructor(private _http: Http, private _router: Router, private _tokenService: TokenService) {
    }

    onRegisterSubmit(username, firstname, lastname, password, address, postcode, city, country) {
      new BackendcallService(this._http, null, null, 'http://192.168.99.100:8088/user')
               .postUserData(username, firstname, lastname, password, address, postcode, city, country)
               .subscribe(
                    (data: Token) => this.onRegisterSuccess(data),
                    error =>  console.log(<any>error));
    }

    onRegisterSuccess(data: Token) {
      // TODO:
      // 1. Token speichern
      this._tokenService.saveToken(data);
      // 2. Erfolgsmeldung herausgeben
      console.log('Erfolgreich angemeldet.');
      // 3. Delay
      // 4. Redirect
      this._router.navigateByUrl('/');
    }
}
