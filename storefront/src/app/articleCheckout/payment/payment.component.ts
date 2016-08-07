import {Component} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import {CORE_DIRECTIVES} from '@angular/common';

@Component({
    selector: 'as-payment',
    templateUrl: 'app/articleCheckout/payment/payment.html',
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES],
    viewProviders: [HTTP_PROVIDERS],
    styleUrls: ['app/articleCheckout/articleCheckout.css']
})

export class PaymentComponent {

    constructor(private _http: Http, private _router: Router) {
    }

}
