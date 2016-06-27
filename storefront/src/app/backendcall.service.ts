import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';
import {Observable} from 'rxjs/Observable';
import {Token} from './token.service';
import {CONSTANTS} from './shared';

@Injectable()
export class BackendcallService {

      private appBrand: string;
      private actionUrl: string;
      private headers: Headers;
      private encodedString: string;

      constructor(private _http: Http, user: string, pw: string, actionUrl: string) {
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
        console.error(errMsg);
        CONSTANTS.MAIN.APP.STATUS = 401;
        return Observable.throw(401);
      }
}
