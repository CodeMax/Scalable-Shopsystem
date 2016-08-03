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
var backendcall_service_1 = require('./../backendcall.service');
var token_service_1 = require('./../token.service');
var article_component_1 = require('./../article/article.component');
var CreateArticleComponent = (function () {
    function CreateArticleComponent(_http, _router, _tokenService) {
        this._http = _http;
        this._router = _router;
        this._tokenService = _tokenService;
    }
    CreateArticleComponent.prototype.onCreateArticle = function (articleTitle, articleDescription, articleEAN, articlePrice, articleStock) {
        var _this = this;
        var supplierId;
        this._newArticle = new article_component_1.Article(articleTitle, articleDescription, articleEAN, articlePrice, articleStock, supplierId);
        new backendcall_service_1.BackendcallService(this._http, 'token', this._tokenService.getToken(), 'http://192.168.99.100:8083/article/')
            .postArticle(this._newArticle)
            .subscribe(function (userId) { return _this.onRegisterSuccess; }, function (error) { return console.log(error); });
    };
    CreateArticleComponent.prototype.onRegisterSuccess = function () {
        alert('Erfolgreich angelegt.');
        this._router.navigateByUrl('/');
    };
    CreateArticleComponent = __decorate([
        core_1.Component({
            selector: 'as-kebab-case',
            templateUrl: 'app/createArticle/createArticle.html',
            directives: [router_1.ROUTER_DIRECTIVES, common_1.CORE_DIRECTIVES],
            viewProviders: [http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router, token_service_1.TokenService])
    ], CreateArticleComponent);
    return CreateArticleComponent;
}());
exports.CreateArticleComponent = CreateArticleComponent;
//# sourceMappingURL=createArticle.component.js.map