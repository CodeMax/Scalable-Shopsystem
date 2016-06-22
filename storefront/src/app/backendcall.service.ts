import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';
import {Token} from './token.service';
import {LoginService} from './login.service'

@Injectable()
export class BackendcallService {

      private actionUrl: string;
      private headers: Headers;
      private encodedString: string;
      private login: LoginService;

      constructor(private _http: Http, user: string, pw: string, actionUrl: string, _login: LoginService) {
        if (user === 'token') {
          this.encodedString = pw;
        } else {
          this.encodedString = 'Basic ' + btoa( user + ':' + pw);
        }

        this.actionUrl = actionUrl;

        this.headers = new Headers();
        this.headers.append('Authorization', this.encodedString);
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');

        this.login = _login
      }

      public getAll = (): Observable<String[]> => {
        return this._http.get(this.actionUrl, {headers: this.headers})
                   .map(this.extractData)
                   .catch(this.handleError);
      }

      public getToken(): Promise<Token> {
          return this._http.get(this.actionUrl, {headers: this.headers})
               .toPromise()
               .then(response => response.json().jwtToken)
               .catch(this.handleError);
  }

      private extractData(res: Response) {
          let body = res.json();
          return body.content || { };
      }

      private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
          error.status ? `${error.status} - ${error.statusText}` : 'Server error';

        if ( error.status === 401 ) {
          alert("Not Authorized");
          // this.login.open();
        }

        console.error(errMsg);
        return Observable.throw(errMsg);
      }
}
