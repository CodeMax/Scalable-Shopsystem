import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from '@angular/common';
import {TokenService} from './../token.service';

@Component({
  selector: 'as-logout',
  templateUrl: 'app/logout/logout.html',
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
    // providers: [TokenService]
})

export class LogoutComponent implements OnInit {

    constructor(private _router: Router, private _tokenService: TokenService) {
      console.log('Logout constructor!');
    }

    ngOnInit() {
      console.log('Logout init!');
      this._tokenService.clearLoginToken();
      this.navigate();
      setTimeout(function(){
        alert('adwjmkwa');
      }, 3200);
    }

    navigate() {
      this._router.navigateByUrl('/');
    }
}
