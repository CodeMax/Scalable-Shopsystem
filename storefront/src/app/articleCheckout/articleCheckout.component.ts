import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {TokenService} from '../token.service';
import {LoginService} from './../login.service';
import {DeliveryComponent} from './delivery/delivery.component';
import {PaymentComponent} from './payment/payment.component';

@Component({
    selector: 'as-kebab-case',
    templateUrl: 'app/articleCheckout/articleCheckout.html',
    providers: [TokenService],
    directives: [ROUTER_DIRECTIVES, DeliveryComponent, PaymentComponent],
    styleUrls: ['app/articleCheckout/articleCheckout.css']
})

export class ArticleCheckoutComponent {

      constructor(private _tokenService: TokenService, private _loginService: LoginService) {
        _loginService.loginNeeded$.subscribe(
          needForLogin => {
            needForLogin = true;
          });
      }

}
