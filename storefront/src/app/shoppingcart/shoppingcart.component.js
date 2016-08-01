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
var ShoppingcartComponent = (function () {
    function ShoppingcartComponent(_http, _loginService, _tokenService, _router) {
        this._http = _http;
        this._loginService = _loginService;
        this._tokenService = _tokenService;
        this._router = _router;
        this.jwtHelper = new angular2_jwt_1.JwtHelper();
        _loginService.loginNeeded$.subscribe(function (needForLogin) {
            needForLogin = true;
        });
    }
    ShoppingcartComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('token: ' + this._tokenService.getToken());
        this.totalOfCart = 0;
        if (this._tokenService.getToken() !== undefined) {
            new backendcall_service_1.BackendcallService(this._http, 'token', this._tokenService.getToken(), 'http://192.168.99.100:8084/shoppingcart/' +
                (this.jwtHelper.decodeToken(this._tokenService.getToken())).userId)
                .getAllShoppingcartItems()
                .subscribe(function (data) { return _this.getDetailsOfArticle(data); }, function (error) { return _this.handleError(error); }, function () { return console.log('Get all Items complete'); });
        }
        else {
            this._loginService.setLogin(true);
        }
    };
    ShoppingcartComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        // persist changes
        for (var _i = 0, _a = this.articles; _i < _a.length; _i++) {
            var art = _a[_i];
            new backendcall_service_1.BackendcallService(this._http, 'token', this._tokenService.getToken(), 'http://192.168.99.100:8084/shoppingcart/')
                .postArticleToShoppingcart(art.id, this.jwtHelper.decodeToken(this._tokenService.getToken()).userId, art.quantity)
                .subscribe(function (data) { return console.log('Successfully saved Shoppingcart'); }, function (error) { return _this.handleError(error); });
        }
    };
    ShoppingcartComponent.prototype.getDetailsOfArticle = function (cartData) {
        var _this = this;
        this.shoppingcart = cartData;
        this.articles = new Array();
        var _loop_1 = function(item) {
            new backendcall_service_1.BackendcallService(this_1._http, 'token', this_1._tokenService.getToken(), 'http://192.168.99.100:8083/articles/' + item.articleId)
                .getArticle().subscribe(function (data) { return _this.combineArticleData(data, item.quantity); }, function (error) { return _this.handleError(error); }, function () { return console.log('Get all Items complete'); });
        };
        var this_1 = this;
        for (var _i = 0, cartData_1 = cartData; _i < cartData_1.length; _i++) {
            var item = cartData_1[_i];
            _loop_1(item);
        }
    };
    ShoppingcartComponent.prototype.combineArticleData = function (data, quantity) {
        data.quantity = quantity;
        this.articles.push(data);
        this.totalOfCart = this.totalOfCart + data.articlePrice * quantity;
    };
    ShoppingcartComponent.prototype.handleError = function (error) {
        this._loginService.setLogin(true);
    };
    ShoppingcartComponent.prototype.goOnShopping = function () {
        this._router.navigate(['/article']);
    };
    ShoppingcartComponent.prototype.goToCheckout = function () {
        this._router.navigate(['/shippment']);
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