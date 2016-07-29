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
    function ArticleComponent(_http, _tokenService, _loginService, _route) {
        this._http = _http;
        this._tokenService = _tokenService;
        this._loginService = _loginService;
        this._route = _route;
        console.log('Article-Component constructor()');
        _loginService.loginNeeded$.subscribe(function (needForLogin) {
            needForLogin = true;
        });
    }
    ArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this._tokenService.getToken());
        this.sub = this._route.params.subscribe(function (params) {
            _this.backend = new backendcall_service_1.BackendcallService(_this._http, 'token', _this._tokenService.getToken(), 'http://192.168.99.100:8083/article/' + params.id);
            _this.backend.getArticle()
                .subscribe(function (data) { return _this.selectedArticle = data; }, function (error) { return _this.handleError(error); }, function () { return console.log('Get all Items complete'
                + JSON.stringify(_this.selectedArticle)); });
        });
    };
    ArticleComponent.prototype.handleError = function (error) {
        console.log('ArticleComponent.handleError: ' + error);
    };
    ArticleComponent = __decorate([
        core_1.Component({
            selector: 'as-article',
            templateUrl: 'app/article/article.html',
            directives: [router_1.ROUTER_DIRECTIVES, common_1.CORE_DIRECTIVES],
            viewProviders: [http_1.HTTP_PROVIDERS],
            providers: [token_service_1.TokenService]
        }), 
        __metadata('design:paramtypes', [http_1.Http, token_service_1.TokenService, login_service_1.LoginService, router_2.ActivatedRoute])
    ], ArticleComponent);
    return ArticleComponent;
}());
exports.ArticleComponent = ArticleComponent;
//# sourceMappingURL=article.component.js.map