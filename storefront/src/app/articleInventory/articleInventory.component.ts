import {Component, OnInit} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import {BackendcallService} from './../backendcall.service';
import {TokenService} from '../token.service';
import {ROUTER_DIRECTIVES} from '@angular/router'; // Routes
import {ArticleComponent} from '../article/article.component';

@Component({
    selector: 'as-kebab-case', // as-articleInventory
    templateUrl: 'app/articleInventory/articleInventory.html',
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES, ArticleComponent],
    viewProviders: [HTTP_PROVIDERS],
    providers: [TokenService]
})

export class ArticleInventoryComponent implements OnInit {

      private articles: string[];
      private backend: BackendcallService;

      constructor(private _http: Http, private _tokenService: TokenService) {
      }

      ngOnInit() {
        console.log(this._tokenService.getToken());
        this.backend = new BackendcallService(this._http, 'token', this._tokenService.getToken(), 'http://192.168.99.100:8083/article');
        this.backend.getAll()
            .subscribe((data: string[] ) => this.articles = data,
                error => console.log(error),
                () => console.log('Get all Items complete'));
      }
}
