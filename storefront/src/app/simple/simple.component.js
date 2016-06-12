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
var SimpleComponent = (function () {
    function SimpleComponent(_http, _tokenService) {
        this._http = _http;
        this._tokenService = _tokenService;
    }
    SimpleComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this._tokenService.getToken());
        this.backend = new backendcall_service_1.BackendcallService(this._http, 'token', this._tokenService.getToken(), 'http://192.168.99.100:8083/article');
        this.backend.getAll()
            .subscribe(function (data) { return _this.servicetemplate = data; }, function (error) { return console.log(error); }, function () { return console.log('Get all Items complete'); });
    };
    SimpleComponent = __decorate([
        core_1.Component({
            selector: 'as-simple',
            templateUrl: 'app/simple/simple.html',
            directives: [common_1.CORE_DIRECTIVES],
            viewProviders: [http_1.HTTP_PROVIDERS],
            providers: [token_service_1.TokenService]
        }), 
        __metadata('design:paramtypes', [http_1.Http, token_service_1.TokenService])
    ], SimpleComponent);
    return SimpleComponent;
}());
exports.SimpleComponent = SimpleComponent;
//# sourceMappingURL=simple.component.js.map