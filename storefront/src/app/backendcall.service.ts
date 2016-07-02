import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';
import {Observable} from 'rxjs/Observable';
import {Token} from './token.service';

@Injectable()
export class BackendcallService {

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
               .then(response => this.extractToken(response))
               .catch(this.handleError);
      }

      public postUserData = (username: String, firstname: String, lastname: String, password: String,
                            address: String, postcode: String, city: String, country:String): Observable<Token> => {
          let body = JSON.stringify({ username, firstname, lastname, password, address, postcode, city, country });
          let headers = new Headers({ 'Content-Type': 'application/json' });
          let options = new RequestOptions({ headers: headers });

          return this._http.post(this.actionUrl, body, options)
                     .map(this.extractToken)
                     .catch(this.handleError);
      }

      private extractData(res: Response) {
          console.log('extractData() is executed.');
          let body = res.json();
          return body.content || { };
      }

      private extractToken(res: Response) {
          console.log('extractData() is executed.');
          let token = res.json().jwtToken;
          return token || { };
      }

      private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
           error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(401);
      }
}
