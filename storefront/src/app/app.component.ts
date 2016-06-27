import {Component, OnInit, ViewChild} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES, Router} from '@angular/router';
import {APP_ROUTES} from './app.routes';
import {NavbarComponent} from './navbar/navbar.component';
import {LoginService} from './login.service';
import {HeaderComponent} from './header/header.component';
// import {CONSTANTS} from './shared';
import {MODAL_DIRECTIVES, ModalComponent} from 'ng2-bs3-modal/ng2-bs3-modal';
import {ArticleInventoryComponent} from './articleInventory/articleInventory.component';

@Component({
    selector: 'as-main-app',
    templateUrl: 'app/app.html',
    directives: [NavbarComponent, ArticleInventoryComponent, HeaderComponent, ROUTER_DIRECTIVES, MODAL_DIRECTIVES], // LoginComponent,
    providers: [LoginService]
})
@Routes(APP_ROUTES)
export class AppComponent implements OnInit {
    public appRoutes: any[];
    // public appBrand: string;

    @ViewChild('myModal')
    modal: ModalComponent;

    constructor(private _router: Router, private _loginService: LoginService) {
        this.appRoutes = APP_ROUTES;
        // this.appBrand = CONSTANTS.MAIN.APP.BRAND;

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

         if (!validRoute) {
            this._router.navigateByUrl('/');
         }
    }

    close() {
        this.modal.close();
    }

    startLogin() {
        console.log('start open()-method');
        this.modal.open();
    }

    onLoginSubmit(username, password) {
      this._loginService.onSubmit(username, password);
      this.close;
    }
}
