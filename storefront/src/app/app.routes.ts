import {HomeComponent} from './home/home.component';
import {SimpleComponent} from './simple/simple.component';
import {LoginComponent} from './login/login.component';

export var APP_ROUTES: any[] = [
    { path: '/', name: 'Home', component: HomeComponent },
    { path: '/simple', name: 'Article', component: SimpleComponent },
    { path: '/login', name: 'Login', component: LoginComponent }
];
