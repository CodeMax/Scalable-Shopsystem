import {Component, OnInit} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import {BackendcallService} from './../backendcall.service';
import {TokenService} from '../token.service';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {RouteSegment} from '@angular/router';

@Component({
    selector: 'as-article',
    templateUrl: 'app/article/article.html',
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES],
    viewProviders: [HTTP_PROVIDERS],
    providers: [TokenService]
})

export class ArticleComponent implements OnInit {

      private servicetemplate: string[];
      private backend: BackendcallService;
      private id: string;
      private href: string;

        constructor(private _http: Http, private _tokenService: TokenService, private params: RouteSegment) {
          this.id = params.getParam('id'); // +params.getParam('id'); = Converting to number
          this.href = params.getParam('href');
        }

      ngOnInit() {
        console.log(this._tokenService.getToken());
        this.backend = new BackendcallService(this._http, 'token', this._tokenService.getToken(), this.href);
        this.backend.getAll()
            .subscribe((data: string[] ) => this.servicetemplate = data,
                error => console.log(error),
                () => console.log('Get all Items complete'));
      }
}
