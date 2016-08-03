import {Component} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import {CORE_DIRECTIVES} from '@angular/common';
import {BackendcallService} from './../backendcall.service';
import {TokenService} from './../token.service';
import {Article} from './../article/article.component';

@Component({
    selector: 'as-kebab-case', // as-articleInventory
    templateUrl: 'app/createArticle/createArticle.html',
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES],
    viewProviders: [HTTP_PROVIDERS]
})

export class CreateArticleComponent {

    private _newArticle: Article;

    constructor(private _http: Http, private _router: Router, private _tokenService: TokenService) {
    }

    onCreateArticle(articleTitle: string, articleDescription: string, articleEAN: string,
                      articlePrice: number, articleStock: number) {
      let supplierId: number;
      this._newArticle = new Article(articleTitle, articleDescription, articleEAN, articlePrice, articleStock, supplierId);

      new BackendcallService(this._http, 'token', this._tokenService.getToken(), 'http://192.168.99.100:8083/article/')
               .postArticle(this._newArticle)
               .subscribe((userId: Number) => this.onRegisterSuccess,
                    error =>  console.log(<any>error));
    }

    onRegisterSuccess() {
      alert('Erfolgreich angelegt.');
      this._router.navigateByUrl('/');
    }
}
