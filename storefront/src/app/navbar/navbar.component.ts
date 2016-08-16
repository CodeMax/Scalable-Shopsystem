import {Component, Input, OnInit, Injectable} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {ROUTER_DIRECTIVES, Router} from '@angular/router';
import {APP_ROUTES} from '../app.routes';
import {TokenService} from './../token.service';
import {NavibarService} from './../navbar.service';
import {LoginService} from './../login.service';

@Component({
    selector: 'as-navbar',
    templateUrl: 'app/navbar/navbar.html',
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES],
    styleUrls: ['app/navbar/navbar.css']
})
export class NavbarComponent implements OnInit {
    @Input() routes: any[];

    private _loginLogoutButtonText: string;

    constructor(private _router: Router, private _navibarService: NavibarService, private _loginService: LoginService,
        private _tokenService: TokenService) {
        _navibarService.userHasToken$.subscribe(
            (hasAuthToken: boolean) => this.showLogoutButton(hasAuthToken));

    }

    ngOnInit() {
        this.routes = APP_ROUTES;

        if (this._tokenService.getToken() === undefined) {
            this.showLogoutButton(false);
        } else {
            this.showLogoutButton(true);
        }
    }

    showLogoutButton(changes) {
        if (changes) {
            this._loginLogoutButtonText = 'Logout';
        } else {
            this._loginLogoutButtonText = 'Login';
        }
    }

    search(enter: string, distance: number) {
      let searchstring = new SearchParameter(enter, distance);
      this._router.navigate(['article'], searchstring);
    }

    redirectUser() {
        if (this._loginLogoutButtonText === 'Logout') {
            this._router.navigate(['logout']);
        } else {
            this._loginService.setLogin(true);
        }
    }
}

@Injectable()
export class SearchParameter {

  private enter: string;
  private distance: number;

  constructor(enter: string, distance: number) {
    this.enter = enter;
    this.distance = distance;
  }
}
