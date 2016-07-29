import {HomeComponent} from './home/home.component';
import {ArticleComponent} from './article/article.component';
import {ArticleInventoryComponent} from './articleInventory/articleInventory.component';
import {LogoutComponent} from './logout/logout.component';
import {RegisterComponent} from './register/register.component';
import {AboutComponent} from './about/about.component';
import {ShoppingcartComponent} from './shoppingcart/shoppingcart.component';
import {provideRouter, RouterConfig} from '@angular/router';

export const APP_ROUTES = [
    { path: '', name: 'Home', component: HomeComponent },
    { path: 'article', name: 'Artikel', component: ArticleInventoryComponent },
    { path: 'article/:id', component: ArticleComponent }
];

export const APP_ROUTES_RIGHT = [
    { path: 'logout', name: 'Logout', component: LogoutComponent }
];

export const OTHER_ROUTES = [
  { path: 'shoppingcart', component: ShoppingcartComponent },
  { path: 'about', component: AboutComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: HomeComponent }
];

export const routes: RouterConfig = [
  ...APP_ROUTES,
  ...APP_ROUTES_RIGHT,
  ...OTHER_ROUTES
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
