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
var app_routes_1 = require('../app.routes');
var token_service_1 = require('./../token.service');
var navbar_service_1 = require('./../navbar.service');
var login_service_1 = require('./../login.service');
var NavbarComponent = (function () {
    function NavbarComponent(_router, _navibarService, _loginService, _tokenService) {
        var _this = this;
        this._router = _router;
        this._navibarService = _navibarService;
        this._loginService = _loginService;
        this._tokenService = _tokenService;
        _navibarService.userHasToken$.subscribe(function (hasAuthToken) { return _this.showLogoutButton(hasAuthToken); });
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.routes = app_routes_1.APP_ROUTES;
        if (this._tokenService.getToken() === undefined) {
            this.showLogoutButton(false);
        }
        else {
            this.showLogoutButton(true);
        }
    };
    NavbarComponent.prototype.showLogoutButton = function (changes) {
        if (changes) {
            this._loginLogoutButtonText = 'Logout';
        }
        else {
            this._loginLogoutButtonText = 'Login';
        }
    };
    NavbarComponent.prototype.redirectUser = function () {
        if (this._loginLogoutButtonText === 'Logout') {
            this._router.navigate(['logout']);
        }
        else {
            this._loginService.setLogin(true);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], NavbarComponent.prototype, "routes", void 0);
    NavbarComponent = __decorate([
        core_1.Component({
            selector: 'as-navbar',
            templateUrl: 'app/navbar/navbar.html',
            directives: [router_1.ROUTER_DIRECTIVES, common_1.CORE_DIRECTIVES],
            styleUrls: ['app/navbar/navbar.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, navbar_service_1.NavibarService, login_service_1.LoginService, token_service_1.TokenService])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map