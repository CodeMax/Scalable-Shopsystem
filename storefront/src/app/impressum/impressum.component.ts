import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {CORE_DIRECTIVES} from '@angular/common';

@Component({
    selector: 'as-kebab-case',
    templateUrl: 'app/impressum/impressum.html',
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES]
})

export class ImpressumComponent {
}
