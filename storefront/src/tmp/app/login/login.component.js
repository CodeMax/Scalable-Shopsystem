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
// import {Router} from '@angular/router';
// import {Http, HTTP_PROVIDERS} from '@angular/http';
var router_1 = require('@angular/router');
var ng2_bs3_modal_1 = require('ng2-bs3-modal/ng2-bs3-modal');
var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.close = function () {
        this.modal.close();
    };
    LoginComponent.prototype.startLogin = function () {
        console.log('start open()-method');
        this.modal.open();
    };
    __decorate([
        core_1.ViewChild('myModal'), 
        __metadata('design:type', ng2_bs3_modal_1.ModalComponent)
    ], LoginComponent.prototype, "modal", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'as-login',
            templateUrl: 'app/login/login.html',
            directives: [common_1.CORE_DIRECTIVES, router_1.ROUTER_DIRECTIVES, common_1.FORM_DIRECTIVES, ng2_bs3_modal_1.MODAL_DIRECTIVES]
        }),
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;

//# sourceMappingURL=login.component.js.map
