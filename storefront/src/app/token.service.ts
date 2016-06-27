import { Injectable } from '@angular/core';
import {CookieService} from 'angular2-cookie/core';

@Injectable()
export class Token {
  private jwtToken: string;

  constructor(token: string) {
      this.jwtToken = token;
  }

  public getJwtToken() {
    return this.jwtToken;
  }
}

@Injectable()
export class TokenService {

  private tokenstorekey: string;
  private _cookieService: CookieService;

  constructor(private _cookieservice: CookieService) {
      this._cookieService = _cookieservice;
      this.tokenstorekey = 'jwtAuthToken';
  }

  public saveToken(value: Token) {
      this._cookieService.put(this.tokenstorekey, JSON.stringify(value));
  }

  public getToken() {
      return this._cookieService.get(this.tokenstorekey);
  }

  public clearLoginToken(){
    this._cookieService.remove(this.tokenstorekey);
  }
}
