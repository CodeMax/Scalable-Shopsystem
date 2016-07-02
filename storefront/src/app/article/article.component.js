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
// import {Http, HTTP_PROVIDERS} from '@angular/http';
// import {BackendcallService} from './../backendcall.service';
var token_service_1 = require('../token.service');
var router_1 = require('@angular/router');
// import {RouteSegment} from '@angular/router';
var login_service_1 = require('./../login.service');
var ArticleComponent = (function () {
    // private servicetemplate: string[];
    //      private backend: BackendcallService;
    // private id: string;
    // private href: string;
    function ArticleComponent(_tokenService, _loginService) {
        this._tokenService = _tokenService;
        this._loginService = _loginService;
        // this.id = params.getParam('id'); // +params.getParam('id'); = Converting to number
        // this.href = params.getParam('href');
        console.log('Article-Component constructor()');
        _loginService.loginNeeded$.subscribe(function (needForLogin) {
            needForLogin = true;
        });
    }
    ArticleComponent.prototype.ngOnInit = function () {
        console.log(this._tokenService.getToken());
        // this.backend = new BackendcallService(this._http, 'token', this._tokenService.getToken(), 'http://192.168.99.100:8083/article');
        // this.backend.getAll()
        //    .subscribe((data: string[] ) => this.servicetemplate = data,
        //        error => this.handleError(error),
        //        () => console.log('Get all Items complete'));
    };
    ArticleComponent = __decorate([
        core_1.Component({
            selector: 'as-article',
            templateUrl: 'app/article/article.html',
            directives: [router_1.ROUTER_DIRECTIVES, common_1.CORE_DIRECTIVES],
            // viewProviders: [HTTP_PROVIDERS],
            providers: [token_service_1.TokenService]
        }), 
        __metadata('design:paramtypes', [token_service_1.TokenService, login_service_1.LoginService])
    ], ArticleComponent);
    return ArticleComponent;
}());
exports.ArticleComponent = ArticleComponent;
//# sourceMappingURL=article.component.js.map