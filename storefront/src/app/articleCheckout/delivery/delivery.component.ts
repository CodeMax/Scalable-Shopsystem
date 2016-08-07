import {Component, Injectable} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import {CORE_DIRECTIVES} from '@angular/common';
import {BackendcallService} from './../../backendcall.service';
import {TokenService} from '../../token.service';
import {LoginService} from './../../login.service';

@Component({
    selector: 'as-delivery',
    templateUrl: 'app/articleCheckout/delivery/delivery.html',
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES],
    viewProviders: [HTTP_PROVIDERS],
    styleUrls: ['app/articleCheckout/articleCheckout.css']
})

export class DeliveryComponent {

    private _delivery: Delivery;

    constructor(private _http: Http, private _router: Router, private _tokenService: TokenService,
                private _loginService: LoginService) {
      new BackendcallService(this._http, 'token', this._tokenService.getToken(),
          'http://192.168.99.100:8083/shippments/').getDelivery()
          .subscribe(( data: Delivery ) => this._delivery = data,
              error => this.handleError(error),
              () => console.log('Get all Items complete')
      );
    }

    handleError(error: any) {
      this._loginService.setLogin(true);
    }

}

@Injectable()
export class Delivery {
  public id: number;
  public shipmentReady: boolean;
  public shippingDays: number;
  public shippingMethod: string;

  constructor(id: number, shipmentReady: boolean,
              shippingDays: number, shippingMethod: string) {
      this.id = id;
      this.shipmentReady = shipmentReady;
      this.shippingDays = shippingDays;
      this.shippingMethod = shippingMethod;
  }
}
