import {Component, OnInit, OnDestroy} from '@angular/core';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import {CORE_DIRECTIVES} from '@angular/common';
import {BackendcallService} from './../backendcall.service';
import {LoginService} from './../login.service';
import {TokenService} from './../token.service';
import {Router} from '@angular/router';
import {Shoppingcart} from './shoppingcart.service';
import {JwtHelper} from 'angular2-jwt';
import {Article} from './../article/article.component';

@Component({
    selector: 'as-kebab-case',
    templateUrl: 'app/shoppingcart/shoppingcart.html',
    directives: [CORE_DIRECTIVES],
    viewProviders: [HTTP_PROVIDERS]
})

export class ShoppingcartComponent implements OnInit, OnDestroy {

  private shoppingcart: Shoppingcart[];
  private articles: Article[];
  private jwtHelper: JwtHelper = new JwtHelper();
  private totalOfCart: number;

  constructor(private _http: Http, private _loginService: LoginService,
              private _tokenService: TokenService, private _router: Router) {
    _loginService.loginNeeded$.subscribe(
      needForLogin => {
        needForLogin = true;
      });
  }

  ngOnInit() {
    console.log('token: ' + this._tokenService.getToken());
    this.totalOfCart = 0;
    if ( this._tokenService.getToken() !== undefined ) {
      new BackendcallService(this._http, 'token', this._tokenService.getToken(),
          'http://192.168.99.100:8084/shoppingcart/' +
          (this.jwtHelper.decodeToken(this._tokenService.getToken())).userId)
          .getAllShoppingcartItems()
          .subscribe((data: Shoppingcart[] ) => this.getDetailsOfArticle(data),
          error => this.handleError(error),
          () => console.log('Get all Items complete'));
    } else {
      this._loginService.setLogin(true);
    }
  }

  ngOnDestroy() {
    // persist changes
    for ( let art of this.articles ) {
      new BackendcallService(this._http, 'token', this._tokenService.getToken(),
          'http://192.168.99.100:8084/shoppingcart/')
          .postArticleToShoppingcart(art.id,
            this.jwtHelper.decodeToken(this._tokenService.getToken()).userId, art.quantity)
            .subscribe(( data: any ) => console.log('Successfully saved Shoppingcart'),
                error => this.handleError(error));
    }
  }

  getDetailsOfArticle(cartData: Shoppingcart[]) {
    this.shoppingcart = cartData;
    this.articles = new Array();

    for ( let item of cartData ) {
      new BackendcallService(this._http, 'token', this._tokenService.getToken(),
          'http://192.168.99.100:8083/articles/' + item.articleId)
          .getArticle().subscribe((data: Article ) => this.combineArticleData(data, item.quantity),
          error => this.handleError(error),
          () => console.log('Get all Items complete'));
    }
  }

  combineArticleData(data: Article, quantity: number) {
    data.quantity = quantity;
    this.articles.push(data);
    this.totalOfCart = this.totalOfCart + data.articlePrice * quantity;
  }

  handleError(error: any) {
    this._loginService.setLogin(true);
  }

  goOnShopping() {
    this._router.navigate(['/article']);
  }

  goToCheckout() {
    this._router.navigate(['/shippment']);
  }
}
