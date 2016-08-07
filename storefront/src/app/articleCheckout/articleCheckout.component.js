"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var token_service_1 = require('../token.service');
var login_service_1 = require('./../login.service');
var delivery_component_1 = require('./delivery/delivery.component');
var payment_component_1 = require('./payment/payment.component');
var ArticleCheckoutComponent = (function () {
    function ArticleCheckoutComponent(_tokenService, _loginService) {
        this._tokenService = _tokenService;
        this._loginService = _loginService;
        _loginService.loginNeeded$.subscribe(function (needForLogin) {
            needForLogin = true;
        });
    }
    ArticleCheckoutComponent = __decorate([
        core_1.Component({
            selector: 'as-kebab-case',
            templateUrl: 'app/articleCheckout/articleCheckout.html',
            providers: [token_service_1.TokenService],
            directives: [router_1.ROUTER_DIRECTIVES, delivery_component_1.DeliveryComponent, payment_component_1.PaymentComponent],
            styleUrls: ['app/articleCheckout/articleCheckout.css']
        }), 
        __metadata('design:paramtypes', [token_service_1.TokenService, login_service_1.LoginService])
    ], ArticleCheckoutComponent);
    return ArticleCheckoutComponent;
}());
exports.ArticleCheckoutComponent = ArticleCheckoutComponent;
//# sourceMappingURL=articleCheckout.component.js.map