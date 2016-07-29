import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {TokenService} from '../token.service';

@Component({
    selector: 'as-home',
    templateUrl: 'app/home/home.html',
    styleUrls: [
        'app/home/home.css'
    ]
})
export class HomeComponent implements OnInit {


    constructor(private _http: Http, private _tokenService: TokenService) {
    }

    ngOnInit() {
      if ( this._tokenService.getToken() != null ) {
        // TODO
      }
    }
}
