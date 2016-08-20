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
var angular2_jwt_1 = require('angular2-jwt');
var ConfirmationComponent = (function () {
    function ConfirmationComponent(_http, _loginService, _tokenService, _router) {
        this._http = _http;
        this._loginService = _loginService;
        this._tokenService = _tokenService;
        this._router = _router;
        this.jwtHelper = new angular2_jwt_1.JwtHelper();
        _loginService.loginNeeded$.subscribe(function (needForLogin) {
            needForLogin = true;
        });
    }
    ConfirmationComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('init start');
        this.totalOfCart = 0;
        this.totalOfCartNetto = 0;
        if (this._tokenService.getToken() !== undefined) {
            new backendcall_service_1.BackendcallService(this._http, 'token', this._tokenService.getToken(), 'http://192.168.99.100:8084/shoppingcart/' +
                (this.jwtHelper.decodeToken(this._tokenService.getToken())).userId)
                .getAllShoppingcartItems()
                .subscribe(function (data) { return console.log('getshoppingcart success: ' + JSON.stringify(data)); }, function (error) { return _this.handleError(error); }, function () { return console.log('Get all Items complete'); });
        }
        else {
            console.log('else: setLogin true');
            this._loginService.setLogin(true);
        }
    };
    ConfirmationComponent.prototype.handleError = function (error) {
        if (error.status === 401) {
            this._loginService.setLogin(true);
        }
        if (error.status === 404) {
            this._router.navigate(['/']);
        }
    };
    ConfirmationComponent.prototype.confirm = function () {
        alert('Ihre Bestellung wurde aufgegeben.');
        this._router.navigate(['/']);
    };
    ConfirmationComponent = __decorate([
        core_1.Component({
            selector: 'as-confirmation',
            templateUrl: 'app/confirmation/confirmation.html',
            directives: [common_1.CORE_DIRECTIVES],
            viewProviders: [http_1.HTTP_PROVIDERS],
            styleUrls: ['app/articleCheckout/articleCheckout.css']
        }), 
        __metadata('design:paramtypes', [http_1.Http, login_service_1.LoginService, token_service_1.TokenService, router_1.Router])
    ], ConfirmationComponent);
    return ConfirmationComponent;
}());
exports.ConfirmationComponent = ConfirmationComponent;
//# sourceMappingURL=confirmation.component.js.map