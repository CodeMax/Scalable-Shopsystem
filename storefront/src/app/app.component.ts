import {Component, ViewChild} from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from '@angular/router';
import {NavbarComponent} from './navbar/navbar.component';
import {LoginService} from './login.service';
import {HeaderComponent} from './header/header.component';
import {MODAL_DIRECTIVES, ModalComponent} from 'ng2-bs3-modal/ng2-bs3-modal';
import {ArticleInventoryComponent} from './articleInventory/articleInventory.component';
import {RegisterComponent} from './register/register.component';
import {AboutComponent} from './about/about.component';

@Component({
    selector: 'as-main-app',
    templateUrl: 'app/app.html',
    directives: [NavbarComponent, ArticleInventoryComponent, HeaderComponent,
                RegisterComponent, AboutComponent, ROUTER_DIRECTIVES, MODAL_DIRECTIVES],
    providers: [LoginService],
    styleUrls: [
        'app/app.css'
    ]
})

export class AppComponent {

    @ViewChild('myModal')
    modal: ModalComponent;

    constructor(private _router: Router, private _loginService: LoginService) {
        _loginService.loginNeeded$.subscribe(
          needForLogin => {
            this.startLogin();
          });
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
