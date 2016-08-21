import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from '@angular/common';
import {TokenService} from './../token.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';

@Component({
  selector: 'as-login-page',
  templateUrl: 'app/sendOrder/sendOrder.html',
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
  styleUrls: ['app/sendOrder/sendOrder.css']
})

export class SendOrderComponent implements OnInit {

    constructor(private _router: Router, private _tokenService: TokenService) {
    }

    ngOnInit() {
      this.timeCounter();
    }

    public timeCounter() {
      Observable.timer(2000).subscribe((a: any) => this.navigate());
    }

    navigate() {
      this._router.navigateByUrl('/');
    }
}
