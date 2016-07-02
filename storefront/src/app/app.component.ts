import {Component, OnInit, ViewChild} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES, Router} from '@angular/router';
import {APP_ROUTES, APP_ROUTES_RIGHT} from './app.routes';
import {NavbarComponent} from './navbar/navbar.component';
import {LoginService} from './login.service';
import {HeaderComponent} from './header/header.component';
import {MODAL_DIRECTIVES, ModalComponent} from 'ng2-bs3-modal/ng2-bs3-modal';
import {ArticleInventoryComponent} from './articleInventory/articleInventory.component';
import {RegisterComponent} from './register/register.component';

@Component({
    selector: 'as-main-app',
    templateUrl: 'app/app.html',
    directives: [NavbarComponent, ArticleInventoryComponent, HeaderComponent,
                RegisterComponent, ROUTER_DIRECTIVES, MODAL_DIRECTIVES],
    providers: [LoginService]
})
@Routes(APP_ROUTES.concat(APP_ROUTES_RIGHT))
export class AppComponent implements OnInit {
    public appRoutes: any[];
    public appRoutesRight: any[];

    @ViewChild('myModal')
    modal: ModalComponent;

    constructor(private _router: Router, private _loginService: LoginService) {
        this.appRoutes = APP_ROUTES;
        this.appRoutesRight = APP_ROUTES_RIGHT;
        _loginService.loginNeeded$.subscribe(
          needForLogin => {
            this.startLogin();
          });
    }

    ngOnInit() {
        let validRoute = false;
        for (let i = 0, len = this.appRoutes.length; i < len; i++) {
            let route = this.appRoutes[i];
            let urlTree = this._router.createUrlTree([route]);
            validRoute = this._router.urlTree.contains(urlTree);
            if (validRoute) {
                continue;
            }
         }

         let validRouteRight = false;
         for (let i = 0, len = this.appRoutesRight.length; i < len; i++) {
             let routeRight = this.appRoutesRight[i];
             let urlTreeRight = this._router.createUrlTree([routeRight]);
             validRouteRight = this._router.urlTree.contains(urlTreeRight);
             if (validRouteRight) {
                 continue;
             }
          }

         if (!validRoute || !validRouteRight) {
            this._router.navigateByUrl('/');
         }
    }

    close() {
        this.modal.close();
    }

    startLogin() {
        this.modal.open();
    }

    onLoginSubmit(username, password) {
      console.log('onLoginSubmit()-Credentials: ' + username + ', ' + password);
      this._loginService.onSubmit(username, password);
      this.close();
    }
}
