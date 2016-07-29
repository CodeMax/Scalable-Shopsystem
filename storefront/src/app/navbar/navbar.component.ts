import {Component, Input, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {APP_ROUTES, APP_ROUTES_RIGHT} from '../app.routes';

@Component({
    selector: 'as-navbar',
    templateUrl: 'app/navbar/navbar.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES],
    styleUrls: [
        'app/navbar/navbar.css'
    ]
})
export class NavbarComponent implements OnInit {
    @Input() routes: any[];
    @Input() routesright: any[];

    ngOnInit() {
      this.routes = APP_ROUTES;
      this.routesright = APP_ROUTES_RIGHT;
    }

}
