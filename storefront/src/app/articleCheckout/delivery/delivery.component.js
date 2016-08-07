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
var http_1 = require('@angular/http');
var common_1 = require('@angular/common');
var backendcall_service_1 = require('./../../backendcall.service');
var token_service_1 = require('../../token.service');
var login_service_1 = require('./../../login.service');
var DeliveryComponent = (function () {
    function DeliveryComponent(_http, _router, _tokenService, _loginService) {
        var _this = this;
        this._http = _http;
        this._router = _router;
        this._tokenService = _tokenService;
        this._loginService = _loginService;
        new backendcall_service_1.BackendcallService(this._http, 'token', this._tokenService.getToken(), 'http://192.168.99.100:8083/shippments/').getDelivery()
            .subscribe(function (data) { return _this._delivery = data; }, function (error) { return _this.handleError(error); }, function () { return console.log('Get all Items complete'); });
    }
    DeliveryComponent.prototype.handleError = function (error) {
        this._loginService.setLogin(true);
    };
    DeliveryComponent = __decorate([
        core_1.Component({
            selector: 'as-delivery',
            templateUrl: 'app/articleCheckout/delivery/delivery.html',
            directives: [router_1.ROUTER_DIRECTIVES, common_1.CORE_DIRECTIVES],
            viewProviders: [http_1.HTTP_PROVIDERS],
            styleUrls: ['app/articleCheckout/articleCheckout.css']
        }), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router, token_service_1.TokenService, login_service_1.LoginService])
    ], DeliveryComponent);
    return DeliveryComponent;
}());
exports.DeliveryComponent = DeliveryComponent;
var Delivery = (function () {
    function Delivery(id, shipmentReady, shippingDays, shippingMethod) {
        this.id = id;
        this.shipmentReady = shipmentReady;
        this.shippingDays = shippingDays;
        this.shippingMethod = shippingMethod;
    }
    Delivery = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [Number, Boolean, Number, String])
    ], Delivery);
    return Delivery;
}());
exports.Delivery = Delivery;
//# sourceMappingURL=delivery.component.js.map