import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Router} from '@angular/router';
import {Http} from '@angular/http';
import {TokenService, Token} from './token.service';
import {BackendcallService} from './backendcall.service';

@Injectable()
export class UserService {


  constructor(private _http: Http, private _router: Router, private _tokenService: TokenService) {
  }


  getUserInformation(user: string, pw: string) {
     new BackendcallService(this._http, user, pw, 'http://192.168.99.100:8088/user')
              .getToken().then((data: Token) => this._tokenService.saveToken(data))
              .then(() => console.log(this._tokenService.getToken()));
  }
}

@Injectable()
export class User {
  id: number;
  username: String;
  firstname: String;
  lastname: String;
  password: String;
  roles: String[];
  address: String;
  city: String;
  postcode: String;
  country: String;
  failedlogins: number;
}
