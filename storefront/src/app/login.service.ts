import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Router} from '@angular/router';
import {Http} from '@angular/http';
import {TokenService, Token} from './token.service';
import {BackendcallService} from './backendcall.service';

@Injectable()
export class LoginService {

  needForLogin = new Subject<boolean>();
  loginNeeded$ = this.needForLogin.asObservable();
  private submitted = false;

  constructor(private _http: Http, private _router: Router, private _tokenService: TokenService) {
  }

  setLogin(needForLogin: boolean) {
    console.log('setLogin() handleError: ' + needForLogin);
    this.needForLogin.next(needForLogin);
  }

  onSubmit(username, password) {
      this.submitted = true;
      console.log(username + ', ' + password);
      this.authenticateForToken(username, password);
  }

  authenticateForToken(user: string, pw: string) {
     new BackendcallService(this._http, user, pw, 'http://192.168.99.100:8088/authentication')
              .getToken().then((data: Token) => this._tokenService.saveToken(data) && this._router.navigateByUrl('/'))
              .then(() => console.log(this._tokenService.getToken()));
  }
}
