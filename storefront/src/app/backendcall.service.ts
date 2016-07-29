import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';
import {Observable} from 'rxjs/Observable';
import {Token} from './token.service';
import {Article} from './article/article.service';
import {Shoppingcart} from './shoppingcart/shoppingcart.service';
import {User} from './user.service';

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

      public getAllArticle = (): Observable<string[]> => {
        return this._http.get(this.actionUrl, {headers: this.headers})
                   .map(this.extractContent)
                   .catch(this.handleError);
      }

      public getArticle = (): Observable<Article> => {
        return this._http.get(this.actionUrl, {headers: this.headers})
                   .map(this.extract)
                   .catch(this.handleError);
      }

      public getAllShoppingcartItems = (): Observable<Shoppingcart> => {
        return this._http.get(this.actionUrl, {headers: this.headers})
                   .map(this.extractShoppingCartList)
                   .catch(this.handleError);
      }

      public getToken(): Promise<Token> {
          return this._http.get(this.actionUrl, {headers: this.headers})
               .toPromise()
               .then(response => this.extractToken(response))
               .catch(this.handleError);
      }

      public postArticleToShoppingcart = (supplierId: Number, userId: Number, quantity: Number): Observable<Token> => {
          let body = JSON.stringify({ supplierId, userId, quantity });
          let headers = new Headers({ 'Content-Type': 'application/json' });
          let options = new RequestOptions({ headers: headers });

          return this._http.post(this.actionUrl, body, options)
                     .map(this.extractToken)
                     .catch(this.handleError);
      }

      public updateUserData = (id: Number, firstname: string, lastname: string, address: string, postcode: string,
                             city: string, country: string): Observable<User> => {
          let body = JSON.stringify({id, firstname, lastname, address, postcode, city, country });
          let options = new RequestOptions({ headers: this.headers });

          return this._http.put(this.actionUrl, body, options)
                     .map(this.extract)
                     .catch(this.handleError);
      }

      public saveAuthData = (username: string, password: string): Observable<Number> => {
          let body = JSON.stringify({username, password});
          let headers = new Headers({ 'Content-Type': 'application/json' });
          let options = new RequestOptions({ headers: headers });

          return this._http.post(this.actionUrl, body, options)
                     .map(this.extract)
                     .catch(this.handleError);
      }


      private extractContent(res: Response) {
          console.log('extractData() is executed.');
          let body = res.json();
          return body.content || { };
      }

      private extract(res: Response) {
          console.log('extract() is executed.');
          let body = res.json();
          return body || { };
      }

      private extractShoppingCartList(res: Response) {
          console.log('extract() is executed.');
          let body = res.json();
          return body.shoppingcartList || { };
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
