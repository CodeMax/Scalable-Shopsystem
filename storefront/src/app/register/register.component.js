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
var router_2 = require('@angular/router');
var backendcall_service_1 = require('./../backendcall.service');
var token_service_1 = require('./../token.service');
var RegisterComponent = (function () {
    function RegisterComponent(_http, _router, _tokenService) {
        this._http = _http;
        this._router = _router;
        this._tokenService = _tokenService;
    }
    RegisterComponent.prototype.onRegisterSubmit = function (username, firstname, lastname, password, address, postcode, city, country) {
        var _this = this;
        new backendcall_service_1.BackendcallService(this._http, null, null, 'http://192.168.99.100:8088/user')
            .postUserData(username, firstname, lastname, password, address, postcode, city, country)
            .subscribe(function (data) { return _this.onRegisterSuccess(data); }, function (error) { return console.log(error); });
    };
    RegisterComponent.prototype.onRegisterSuccess = function (data) {
        // TODO:
        // 1. Token speichern
        this._tokenService.saveToken(data);
        // 2. Erfolgsmeldung herausgeben
        console.log('Erfolgreich angemeldet.');
        // 3. Delay
        // 4. Redirect
        this._router.navigateByUrl('/');
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'as-kebab-case',
            templateUrl: 'app/register/register.html',
            directives: [router_2.ROUTER_DIRECTIVES, common_1.CORE_DIRECTIVES],
            viewProviders: [http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router, token_service_1.TokenService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map