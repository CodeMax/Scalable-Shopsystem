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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/toPromise');
require('rxjs/add/observable/throw');
var Observable_1 = require('rxjs/Observable');
var BackendcallService = (function () {
    function BackendcallService(_http, user, pw, actionUrl) {
        var _this = this;
        this._http = _http;
        this.getAll = function () {
            return _this._http.get(_this.actionUrl, { headers: _this.headers })
                .map(_this.extractData)
                .catch(_this.handleError);
        };
        this.postUserData = function (username, firstname, lastname, password, address, postcode, city, country) {
            var body = JSON.stringify({ username: username, firstname: firstname, lastname: lastname, password: password, address: address, postcode: postcode, city: city, country: country });
            var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
            var options = new http_1.RequestOptions({ headers: headers });
            return _this._http.post(_this.actionUrl, body, options)
                .map(_this.extractToken)
                .catch(_this.handleError);
        };
        if (user === 'token') {
            this.encodedString = pw;
        }
        else {
            this.encodedString = 'Basic ' + btoa(user + ':' + pw);
        }
        this.actionUrl = actionUrl;
        this.headers = new http_1.Headers();
        this.headers.append('Authorization', this.encodedString);
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }
    BackendcallService.prototype.getToken = function () {
        var _this = this;
        return this._http.get(this.actionUrl, { headers: this.headers })
            .toPromise()
            .then(function (response) { return _this.extractToken(response); })
            .catch(this.handleError);
    };
    BackendcallService.prototype.extractData = function (res) {
        console.log('extractData() is executed.');
        var body = res.json();
        return body.content || {};
    };
    BackendcallService.prototype.extractToken = function (res) {
        console.log('extractData() is executed.');
        var token = res.json().jwtToken;
        return token || {};
    };
    BackendcallService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return Observable_1.Observable.throw(401);
    };
    BackendcallService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, String, String, String])
    ], BackendcallService);
    return BackendcallService;
}());
exports.BackendcallService = BackendcallService;

//# sourceMappingURL=backendcall.service.js.map
