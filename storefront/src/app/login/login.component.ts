import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from '@angular/common';
import {TokenService} from './../token.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';

@Component({
  selector: 'as-login-page',
  templateUrl: 'app/login/login.html',
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
  styleUrls: ['app/login/login.css']
})

export class LoginComponent implements OnInit {

    constructor(private _router: Router, private _tokenService: TokenService) {
      console.log('Login constructor!');
    }

    ngOnInit() {
      console.log('Login init!');
      this.timeCounter();
    }

    public timeCounter() {
      Observable.timer(2000).subscribe((a: any) => this.navigate());
    }

    navigate() {
      this._router.navigateByUrl('/');
    }
}
