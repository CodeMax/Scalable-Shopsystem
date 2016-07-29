import {Component} from '@angular/core';
// import {Http} from '@angular/http';
// import {TokenService} from '../token.service';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {CORE_DIRECTIVES} from '@angular/common';

@Component({
    selector: 'as-kebab-case',
    templateUrl: 'app/about/about.html',
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES]
})

export class AboutComponent { // implements OnInit {

  /*
    constructor(private _http: Http,
                private _tokenService: TokenService,
                private _router: Router) {
    }

    ngOnInit() {
      if ( this._tokenService.getToken() != null ) {
        alert('todo');
      }
    }
    */
}
