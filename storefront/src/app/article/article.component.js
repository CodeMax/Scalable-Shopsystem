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
var common_1 = require('@angular/common');
var http_1 = require('@angular/http');
var backendcall_service_1 = require('./../backendcall.service');
var token_service_1 = require('../token.service');
var router_1 = require('@angular/router');
var router_2 = require('@angular/router');
var login_service_1 = require('./../login.service');
var ArticleComponent = (function () {
    function ArticleComponent(_http, _tokenService, params, _loginService) {
        this._http = _http;
        this._tokenService = _tokenService;
        this.params = params;
        this._loginService = _loginService;
        this.id = params.getParam('id'); // +params.getParam('id'); = Converting to number
        this.href = params.getParam('href');
        _loginService.loginNeeded$.subscribe(function (needForLogin) {
            true;
        });
    }
    ArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this._tokenService.getToken());
        this.backend = new backendcall_service_1.BackendcallService(this._http, 'token', this._tokenService.getToken(), this.href);
        this.backend.getAll()
            .subscribe(function (data) { return _this.servicetemplate = data; }, function (error) { return _this.handleError(error); }, function () { return console.log('Get all Items complete'); });
    };
    ArticleComponent.prototype.handleError = function (error) {
        this._loginService.setLogin(true);
    };
    ArticleComponent = __decorate([
        core_1.Component({
            selector: 'as-article',
            templateUrl: 'app/article/article.html',
            directives: [router_1.ROUTER_DIRECTIVES, common_1.CORE_DIRECTIVES],
            viewProviders: [http_1.HTTP_PROVIDERS],
            providers: [token_service_1.TokenService]
        }), 
        __metadata('design:paramtypes', [http_1.Http, token_service_1.TokenService, router_2.RouteSegment, login_service_1.LoginService])
    ], ArticleComponent);
    return ArticleComponent;
}());
exports.ArticleComponent = ArticleComponent;
//# sourceMappingURL=article.component.js.map