import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {ROUTER_PROVIDERS} from '@angular/router';
import {HTTP_PROVIDERS, ConnectionBackend} from '@angular/http';
import {AppComponent} from './app.component';
import {BackendcallService} from './backendcall.service';
import {TokenService} from './token.service';
import {CookieService} from 'angular2-cookie/core';

declare var ENV: string;

if (ENV === 'production') {
    enableProdMode();
}

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    ConnectionBackend,
    BackendcallService,
    CookieService,
    TokenService
]);
