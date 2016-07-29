import {Injectable} from '@angular/core';
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
  id: Number;
  username: string;
  firstname: string;
  lastname: string;
  password: string;
  roles: string[];
  address: string;
  city: string;
  postcode: string;
  country: string;
  failedlogins: Number;

  constructor(id: Number, username: string, firstname: string, lastname: string,
                    password: string, address: string, postcode: string,
                    city: string, country: string, failedlogins: Number) {
      this.id = id;
      this.username = username;
      this.password = password;
      this.firstname = firstname;
      this.lastname = lastname;
      this.address = address;
      this.postcode = postcode;
      this.city = city;
      this.country = country;
      this.failedlogins = failedlogins;
  }
}