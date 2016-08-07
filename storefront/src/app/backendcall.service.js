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
        // ArticleList
        this.getAllArticle = function () {
            return _this._http.get(_this.actionUrl, { headers: _this.headers })
                .map(_this.extractArticleList)
                .catch(_this.handleError);
        };
        // Article-Detailpage
        this.getArticle = function () {
            return _this._http.get(_this.actionUrl, { headers: _this.headers })
                .map(_this.extract)
                .catch(_this.handleError);
        };
        this.postArticle = function (article) {
            var body = JSON.stringify(article);
            var options = new http_1.RequestOptions({ headers: _this.headers });
            return _this._http.post(_this.actionUrl, body, options)
                .catch(_this.handleError);
        };
        this.updateArticle = function (article) {
            var body = JSON.stringify(article);
            var options = new http_1.RequestOptions({ headers: _this.headers });
            return _this._http.put(_this.actionUrl, body, options)
                .catch(_this.handleError);
        };
        // Shoppingcart
        this.getAllShoppingcartItems = function () {
            return _this._http.get(_this.actionUrl, { headers: _this.headers })
                .map(_this.extractShoppingCartList)
                .catch(_this.handleError);
        };
        this.deleteShoppingcartItem = function () {
            return _this._http.delete(_this.actionUrl, { headers: _this.headers })
                .catch(_this.handleError);
        };
        this.postArticleToShoppingcart = function (articleId, userId, quantity) {
            var body = JSON.stringify({ articleId: articleId, userId: userId, quantity: quantity });
            var options = new http_1.RequestOptions({ headers: _this.headers });
            return _this._http.post(_this.actionUrl, body, options)
                .catch(_this.handleError);
        };
        this.updateArticleToShoppingcart = function (articleId, userId, quantity) {
            var body = JSON.stringify({ articleId: articleId, userId: userId, quantity: quantity });
            var options = new http_1.RequestOptions({ headers: _this.headers });
            return _this._http.put(_this.actionUrl, body, options)
                .catch(_this.handleError);
        };
        // User
        this.getUserData = function () {
            return _this._http.get(_this.actionUrl, { headers: _this.headers })
                .map(_this.extract)
                .catch(_this.handleError);
        };
        this.saveUserData = function (id, firstname, lastname, address, postcode, city, country) {
            var body = JSON.stringify({ id: id, firstname: firstname, lastname: lastname, address: address, postcode: postcode, city: city, country: country });
            var options = new http_1.RequestOptions({ headers: _this.headers });
            return _this._http.post(_this.actionUrl, body, options)
                .map(_this.extract)
                .catch(_this.handleError);
        };
        this.updateUserData = function (id, firstname, lastname, address, postcode, city, country) {
            var body = JSON.stringify({ id: id, firstname: firstname, lastname: lastname, address: address, postcode: postcode, city: city, country: country });
            var options = new http_1.RequestOptions({ headers: _this.headers });
            return _this._http.put(_this.actionUrl, body, options)
                .map(_this.extract)
                .catch(_this.handleError);
        };
        this.saveAuthData = function (username, password) {
            var body = JSON.stringify({ username: username, password: password });
            var options = new http_1.RequestOptions({ headers: _this.headers });
            return _this._http.post(_this.actionUrl, body, options)
                .map(_this.extract)
                .catch(_this.handleError);
        };
        // Delivery
        this.getDelivery = function () {
            return _this._http.get(_this.actionUrl, { headers: _this.headers })
                .map(_this.extract)
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
    // Authentication
    BackendcallService.prototype.getToken = function () {
        var _this = this;
        return this._http.get(this.actionUrl, { headers: this.headers })
            .toPromise()
            .then(function (response) { return _this.extractToken(response); })
            .catch(this.handleError);
    };
    BackendcallService.prototype.extractArticleList = function (res) {
        console.log('extractData() is executed.');
        var body = res.json();
        return body.articleList || {};
    };
    BackendcallService.prototype.extract = function (res) {
        console.log('extract() is executed.');
        var body = res.json();
        return body || {};
    };
    BackendcallService.prototype.extractShoppingCartList = function (res) {
        console.log('extract() is executed.');
        var body = res.json();
        return body.shoppingcartList || {};
    };
    BackendcallService.prototype.extractToken = function (res) {
        console.log('extractData() is executed.');
        var token = res.json().jwtToken;
        return token || {};
    };
    BackendcallService.prototype.handleError = function (error) {
        /*        let errMsg = (error.message) ? error.message :
                   error.status ? `${error.status} - ${error.statusText}` : 'Server error';
                console.log(errMsg); */
        return Observable_1.Observable.throw(error);
    };
    BackendcallService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, String, String, String])
    ], BackendcallService);
    return BackendcallService;
}());
exports.BackendcallService = BackendcallService;
//# sourceMappingURL=backendcall.service.js.map