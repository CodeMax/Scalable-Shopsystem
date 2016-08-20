import {Component} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';
import {Http} from '@angular/http';
import {CORE_DIRECTIVES} from '@angular/common';
import {BackendcallService} from './../backendcall.service';
import {TokenService} from './../token.service';
import {LoginService} from './../login.service';
import {Article} from './../article/article.component';
import {JwtHelper} from 'angular2-jwt';
import {User} from './../user.service';

@Component({
    selector: 'as-kebab-case',
    templateUrl: 'app/createArticle/createArticle.html',
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES]
})

export class CreateArticleComponent {

    private _newArticle: Article;
    private _userId: number;
    private _supplierId: number;
    private jwtHelper: JwtHelper = new JwtHelper();

    constructor(private _http: Http, private _router: Router, private _tokenService: TokenService,
            private _loginService: LoginService) {
              _loginService.loginNeeded$.subscribe(
                  needForLogin => {
                      needForLogin = true;
                  });
              if (this._tokenService.getToken() == null) {
                  this.handleError('loginNeeded');
              } else {
                  this._userId = (this.jwtHelper.decodeToken(this._tokenService.getToken())).userId;
                  new BackendcallService(this._http, 'token', this._tokenService.getToken(), 'http://192.168.99.100:8087/user/'
                      + this._userId).getUserData().subscribe((data: User) => this._supplierId = data.supplierId,
                      error => this.handleError(error));
              }
    }

    onCreateArticle(articleTitle: string, articleDescription: string, articleEAN: string,
                      articlePrice: number, articleStock: number) {
      this._newArticle = new Article(articleTitle, articleDescription, articleEAN, articlePrice, articleStock, this._supplierId);

      new BackendcallService(this._http, 'token', this._tokenService.getToken(), 'http://192.168.99.100:8083/articles/')
               .postArticle(this._newArticle)
               .subscribe((userId: Number) => this._router.navigateByUrl('/'),
                    error =>  console.log(<any>error));
    }

    handleError(error: any) {
        this._loginService.setLogin(true);
    }
}
