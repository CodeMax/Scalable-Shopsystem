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
var http_1 = require('@angular/http');
var common_1 = require('@angular/common');
var backendcall_service_1 = require('./../backendcall.service');
var login_service_1 = require('./../login.service');
var token_service_1 = require('./../token.service');
var router_1 = require('@angular/router');
var ShoppingcartComponent = (function () {
    function ShoppingcartComponent(_http, _loginService, _tokenService, _router) {
        this._http = _http;
        this._loginService = _loginService;
        this._tokenService = _tokenService;
        this._router = _router;
        _loginService.loginNeeded$.subscribe(function (needForLogin) {
            needForLogin = true;
        });
    }
    ShoppingcartComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this._tokenService.getToken());
        this.backend = new backendcall_service_1.BackendcallService(this._http, 'token', this._tokenService.getToken(), 'http://192.168.99.100:8084/shoppingcart');
        this.backend.getAllShoppingcartItems()
            .subscribe(function (data) { return _this.shoppingcart = data; }, function (error) { return _this.handleError(error); }, function () { return console.log('Get all Items complete'); });
    };
    ShoppingcartComponent.prototype.handleError = function (error) {
        this._loginService.setLogin(true);
    };
    ShoppingcartComponent.prototype.goOnShopping = function () {
        this._router.navigate(['/article']);
    };
    ShoppingcartComponent = __decorate([
        core_1.Component({
            selector: 'as-kebab-case',
            templateUrl: 'app/shoppingcart/shoppingcart.html',
            directives: [common_1.CORE_DIRECTIVES],
            viewProviders: [http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [http_1.Http, login_service_1.LoginService, token_service_1.TokenService, router_1.Router])
    ], ShoppingcartComponent);
    return ShoppingcartComponent;
}());
exports.ShoppingcartComponent = ShoppingcartComponent;
//# sourceMappingURL=shoppingcart.component.js.map