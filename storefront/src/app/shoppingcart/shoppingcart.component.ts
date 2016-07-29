import {Component, OnInit} from '@angular/core';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import {CORE_DIRECTIVES} from '@angular/common';
import {BackendcallService} from './../backendcall.service';
import {LoginService} from './../login.service';
import {TokenService} from './../token.service';
import {Router} from '@angular/router';
import {Shoppingcart} from './shoppingcart.service';

@Component({
    selector: 'as-kebab-case',
    templateUrl: 'app/shoppingcart/shoppingcart.html',
    directives: [CORE_DIRECTIVES],
    viewProviders: [HTTP_PROVIDERS]
})

export class ShoppingcartComponent implements OnInit {

  private shoppingcart: Shoppingcart;
  private backend: BackendcallService;

  constructor(private _http: Http, private _loginService: LoginService, private _tokenService: TokenService, private _router: Router) {
    _loginService.loginNeeded$.subscribe(
      needForLogin => {
        needForLogin = true;
      });
  }

  ngOnInit() {
    console.log(this._tokenService.getToken());
    this.backend = new BackendcallService(this._http, 'token', this._tokenService.getToken(),
                  'http://192.168.99.100:8084/shoppingcart');
    this.backend.getAllShoppingcartItems()
        .subscribe((data: Shoppingcart ) => this.shoppingcart = data,
        error => this.handleError(error),
        () => console.log('Get all Items complete'));
  }

  handleError(error: any) {
    this._loginService.setLogin(true);
  }

  goOnShopping() {
    this._router.navigate(['/article']);
  }
}
