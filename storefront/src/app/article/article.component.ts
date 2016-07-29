import {Component, OnInit} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import {BackendcallService} from './../backendcall.service';
import {TokenService} from '../token.service';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {LoginService} from './../login.service';
import {Article} from './article.service';

@Component({
    selector: 'as-article',
    templateUrl: 'app/article/article.html',
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES],
    viewProviders: [HTTP_PROVIDERS],
    providers: [TokenService]
})

export class ArticleComponent implements OnInit {

      public selectedArticle: Article;
      private backend: BackendcallService;
      private sub: any;

      constructor(private _http: Http,
                  private _tokenService: TokenService,
                  private _loginService: LoginService,
                  private _route: ActivatedRoute) {
        console.log('Article-Component constructor()');
        _loginService.loginNeeded$.subscribe(
          needForLogin => {
            needForLogin = true;
          });
      }

      ngOnInit() {
        console.log(this._tokenService.getToken());
        this.sub = this._route.params.subscribe((params: {id: string}) => {
          this.backend = new BackendcallService(this._http, 'token',
                         this._tokenService.getToken(),
                         'http://192.168.99.100:8083/article/' + params.id);
          this.backend.getArticle()
            .subscribe(( data: Article ) => this.selectedArticle = data,
                error => this.handleError(error),
                () => console.log('Get all Items complete'
                                  + JSON.stringify(this.selectedArticle)));
        });
      }

      handleError(error: any) {
        console.log('ArticleComponent.handleError: ' + error);
      }
}
