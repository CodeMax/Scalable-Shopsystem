import {Component, OnInit} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
// import {Http, HTTP_PROVIDERS} from '@angular/http';
// import {BackendcallService} from './../backendcall.service';
import {TokenService} from '../token.service';
import {ROUTER_DIRECTIVES} from '@angular/router';
// import {RouteSegment} from '@angular/router';
import {LoginService} from './../login.service';

@Component({
    selector: 'as-article',
    templateUrl: 'app/article/article.html',
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES],
    // viewProviders: [HTTP_PROVIDERS],
    providers: [TokenService]
})

export class ArticleComponent implements OnInit {

      // private servicetemplate: string[];
//      private backend: BackendcallService;
      // private id: string;
      // private href: string;

      constructor(private _tokenService: TokenService,
                  private _loginService: LoginService) { // private _http: Http,  private params: RouteSegment,
        // this.id = params.getParam('id'); // +params.getParam('id'); = Converting to number
        // this.href = params.getParam('href');
        console.log('Article-Component constructor()');
        _loginService.loginNeeded$.subscribe(
          needForLogin => {
            needForLogin = true;
          });
      }

      ngOnInit() {
        console.log(this._tokenService.getToken());
        // this.backend = new BackendcallService(this._http, 'token', this._tokenService.getToken(), 'http://192.168.99.100:8083/article');
        // this.backend.getAll()
        //    .subscribe((data: string[] ) => this.servicetemplate = data,
        //        error => this.handleError(error),
        //        () => console.log('Get all Items complete'));
      }

      // handleError(error: any) {
      //  this._loginService.setLogin(true);
      // }
}
