import {Component, OnInit} from '@angular/core';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import {CORE_DIRECTIVES} from '@angular/common';
import {LoginService} from './../login.service';
import {TokenService} from './../token.service';
import {Router} from '@angular/router';
import {BackendcallService} from './../backendcall.service';
import {Shoppingcart} from './../shoppingcart/shoppingcart.service';
import {JwtHelper} from 'angular2-jwt';
import {Article} from './../article/article.component';
import {Payment, List} from './payment.service';

@Component({
    selector: 'as-payment',
    templateUrl: 'app/payment/payment.html',
    directives: [CORE_DIRECTIVES],
    viewProviders: [HTTP_PROVIDERS],
    styleUrls: ['app/articleCheckout/articleCheckout.css']
})
export class PaymentComponent implements OnInit {

  paymentList: List<Payment[]>;
  payments: Payment[];
  paymentArticleList: Article[];

  constructor(private _http: Http, private _loginService: LoginService,
      private _tokenService: TokenService, private _router: Router, private jwtHelper: JwtHelper) {
        this.paymentList = new List<Payment[]>();
      _loginService.loginNeeded$.subscribe(
          needForLogin => {
              needForLogin = true;
          });
  }

  ngOnInit() {
      if (this._tokenService.getToken() !== undefined) {
          new BackendcallService(this._http, 'token', this._tokenService.getToken(),
              'http://192.168.99.100:8084/shoppingcart/' +
              (this.jwtHelper.decodeToken(this._tokenService.getToken())).userId)
              .getAllShoppingcartItems()
              .subscribe((data: Shoppingcart[]) => this.getArticleOfShoppingcart(data),
              error => this.handleError(error),
              () => console.log('Get all Items complete'));
      } else {
          this._loginService.setLogin(true);
      }
  }

  getArticleOfShoppingcart(cart: Shoppingcart[]) {
    for (let cartItem of cart) {
        new BackendcallService(this._http, 'token', this._tokenService.getToken(),
            'http://192.168.99.100:8083/articles/' + cartItem.articleId)
            .getArticle().subscribe((data: Article) => this.getPaymentMethodsForArticles(data),
            error => this.handleError(error),
            () => console.log('Get all Items complete'));
    }
  }

  getPaymentMethodsForArticles(article: Article) {
    this.paymentArticleList.push(article);
    new BackendcallService(this._http, 'token', this._tokenService.getToken(),
        'http://192.168.99.100:8086/payments/' + article.supplierId)
        .getPayment().subscribe((data: Payment[]) => this.paymentList.add(data),
        error => this.handleError(error),
        () => console.log('Get all Items complete'));
  }

  handleError(error: any) {
      if (error.status === 401) {
          this._loginService.setLogin(true);
      }
      if (error.status === 404) {
          this._router.navigate(['/']);
      }
  }
}
