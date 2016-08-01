import {Component, OnInit} from '@angular/core';
import {TokenService} from '../token.service';
import {LoginService} from './../login.service';

@Component({
    selector: 'as-kebab-case',
    templateUrl: 'app/articleCheckout/articleCheckout.html',
    providers: [TokenService],
    styleUrls: [
        'app/articleCheckout/articleCheckout.css'
    ]
})

export class ArticleCheckoutComponent implements OnInit {

      constructor(private _tokenService: TokenService, private _loginService: LoginService) {
        _loginService.loginNeeded$.subscribe(
          needForLogin => {
            needForLogin = true;
          });
      }

      ngOnInit() {
        if ( this._tokenService.getToken() == null ) {
          this._loginService.setLogin(true);
        }
      }
}
