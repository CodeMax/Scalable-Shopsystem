import {HomeComponent} from './home/home.component';
import {ArticleComponent} from './article/article.component';
import {ArticleInventoryComponent} from './articleInventory/articleInventory.component';
import {LogoutComponent} from './logout/logout.component';
import {RegisterComponent} from './register/register.component';

export var APP_ROUTES: any[] = [
    { path: '/', name: 'Home', component: HomeComponent },
    { path: '/article', name: 'Artikel', component: ArticleInventoryComponent },
    // { path: '/account', name: 'Account', component: DashboardComponent },
    { path: '/article/:id', component: ArticleComponent }
];

export var APP_ROUTES_RIGHT: any[] = [
    { path: '/register', component: RegisterComponent },
    { path: '/logout', name: 'Logout', component: LogoutComponent }
];
