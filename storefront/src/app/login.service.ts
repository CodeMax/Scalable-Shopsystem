import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Router} from '@angular/router';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import {TokenService, Token} from './token.service';
import {BackendcallService} from './backendcall.service';

@Injectable()
export class LoginService {

  needForLogin = new Subject<boolean>();
  loginNeeded$ = this.needForLogin.asObservable();
  private submitted = false;
  private tokenservice: TokenService;
  private username: string;
  private password: string;

  constructor(private _http: Http, private _router: Router, private _tokenService: TokenService) {
    this.tokenservice = _tokenService;
  }

  setLogin(needForLogin: boolean) {
    console.log('setLogin() handleError: ' + needForLogin);
    this.needForLogin.next(needForLogin);
  }

  onSubmit(username, password) {
      this.submitted = true;
      console.log(this.username + ', ' + this.password);
      this.authenticateForToken(this.username, this.password);
  }

  logout() {
    this.tokenservice.clearLoginToken();
    this._router.navigateByUrl('/');
  }

  authenticateForToken(user: string, pw: string) {
     new BackendcallService(this._http, user, pw, 'http://192.168.99.100:8088/authentication')
              .getToken().then((data: Token) => this._tokenService.saveToken(data))
              .then(() => console.log(this._tokenService.getToken()));
  }
}
