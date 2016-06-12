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
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var backendcall_service_1 = require('./../backendcall.service');
var token_service_1 = require('./../token.service');
var LoginComponent = (function () {
    function LoginComponent(_http, _router, _tokenService) {
        this._http = _http;
        this._router = _router;
        this._tokenService = _tokenService;
        this.submitted = false;
        this.tokenservice = _tokenService;
    }
    LoginComponent.prototype.onSubmit = function (username, password) {
        this.submitted = true;
        console.log(this.username + ', ' + this.password);
        this.authenticateForToken(this.username, this.password);
        this._router.navigateByUrl('/');
    };
    LoginComponent.prototype.authenticateForToken = function (user, pw) {
        var _this = this;
        new backendcall_service_1.BackendcallService(this._http, user, pw, 'http://192.168.99.100:8088/authentication')
            .getToken().then(function (data) { return _this._tokenService.saveToken(data); })
            .then(function () { return console.log(_this._tokenService.getToken()); });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'as-login',
            templateUrl: 'app/login/login.html',
            directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES],
            viewProviders: [http_1.HTTP_PROVIDERS],
            providers: [token_service_1.TokenService]
        }), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router, token_service_1.TokenService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;

//# sourceMappingURL=login.component.js.map
