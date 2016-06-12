"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var backendcall_service_1 = require('./backendcall.service');
var token_service_1 = require('./token.service');
var core_2 = require('angular2-cookie/core');
if (ENV === 'production') {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    router_1.ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    http_1.ConnectionBackend,
    backendcall_service_1.BackendcallService,
    core_2.CookieService,
    token_service_1.TokenService
]);
//# sourceMappingURL=main.js.map