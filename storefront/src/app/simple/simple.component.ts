import {Component, OnInit} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import {BackendcallService} from './../backendcall.service';
import {TokenService} from '../token.service';

@Component({
    selector: 'as-simple',
    templateUrl: 'app/simple/simple.html',
    directives: [CORE_DIRECTIVES],
    viewProviders: [HTTP_PROVIDERS],
    providers: [TokenService]
})

export class SimpleComponent implements OnInit {

      private servicetemplate: string[];
      private backend: BackendcallService;

      constructor(private _http: Http, private _tokenService: TokenService) {
      }

      ngOnInit() {
        console.log(this._tokenService.getToken());
        this.backend = new BackendcallService(this._http, 'token', this._tokenService.getToken(), 'http://192.168.99.100:8083/article');
        this.backend.getAll()
            .subscribe((data: string[] ) => this.servicetemplate = data,
                error => console.log(error),
                () => console.log('Get all Items complete'));
      }
}
