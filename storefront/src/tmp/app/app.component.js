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
var navbar_component_1 = require('./navbar/navbar.component');
var login_service_1 = require('./login.service');
var header_component_1 = require('./header/header.component');
var ng2_bs3_modal_1 = require('ng2-bs3-modal/ng2-bs3-modal');
var articleInventory_component_1 = require('./articleInventory/articleInventory.component');
var register_component_1 = require('./register/register.component');
var about_component_1 = require('./about/about.component');
var AppComponent = (function () {
    function AppComponent(_router, _loginService) {
        var _this = this;
        this._router = _router;
        this._loginService = _loginService;
        _loginService.loginNeeded$.subscribe(function (needForLogin) {
            _this.startLogin();
        });
    }
    AppComponent.prototype.close = function () {
        this.modal.close();
        this._router.navigate(['']);
    };
    AppComponent.prototype.startLogin = function () {
        this.modal.open();
    };
    AppComponent.prototype.onLoginSubmit = function (username, password) {
        this._loginService.onSubmit(username, password);
        this.close();
    };
    __decorate([
        core_1.ViewChild('myModal'), 
        __metadata('design:type', ng2_bs3_modal_1.ModalComponent)
    ], AppComponent.prototype, "modal", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: 'as-main-app',
            templateUrl: 'app/app.html',
            directives: [navbar_component_1.NavbarComponent, articleInventory_component_1.ArticleInventoryComponent, header_component_1.HeaderComponent,
                register_component_1.RegisterComponent, about_component_1.AboutComponent, router_1.ROUTER_DIRECTIVES, ng2_bs3_modal_1.MODAL_DIRECTIVES],
            providers: [login_service_1.LoginService],
            styleUrls: ['app/app.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, login_service_1.LoginService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=app.component.js.map
