import {Component, OnInit} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import {BackendcallService} from './../backendcall.service';
import {TokenService} from '../token.service';
import {ROUTER_DIRECTIVES, Router, ActivatedRoute} from '@angular/router';
import {ArticleComponent} from '../article/article.component';
import {LoginService} from './../login.service';

@Component({
    selector: 'as-kebab-case',
    templateUrl: 'app/articleInventory/articleInventory.html',
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES, ArticleComponent],
    viewProviders: [HTTP_PROVIDERS],
    providers: [TokenService],
    styleUrls: [
        'app/articleInventory/articleInventory.css'
    ]
})

export class ArticleInventoryComponent implements OnInit {

      private articles: string[];
      private backend: BackendcallService;
      private searchstring: string;
      private distance: number;

      constructor(private _http: Http, private _tokenService: TokenService,
                  private _loginService: LoginService, private _router: Router,
                  private _route: ActivatedRoute) {
                    // console.log('Enter: ' + _route.params['enter']);
      }

      ngOnInit() {
        // this.searchstring = this._route.queryParams.map(params => params['enter'] || 'none');
        // this.distance = this._route.queryParams.map(params => params['distance'] || 'none');

        if ( this.searchstring !== 'none' ) {
          this.backend = new BackendcallService(this._http, 'token', this._tokenService.getToken(),
                        'http://192.168.99.100:8083/articles/search?enter=' + this.searchstring + '&distance=' + this.distance);
        } else {
          this.backend = new BackendcallService(this._http, 'token', this._tokenService.getToken(),
                        'http://192.168.99.100:8083/articles');

        }

        this.backend.getAllArticle()
            .subscribe((data: string[] ) => this.articles = data,
            error => this.handleError(error),
            () => console.log('Get all Items complete'));
      }

      handleError(error: any) {
        this._loginService.setLogin(true);
      }

      onSelect(id: number) {
        console.log('onSelect aufgerufen mit der id: ' + id);
        this._router.navigate(['/article', id]);
      }
}
