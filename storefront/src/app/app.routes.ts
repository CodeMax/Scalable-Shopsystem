import {HomeComponent} from './home/home.component';
import {ArticleComponent} from './article/article.component';
import {ArticleInventoryComponent} from './articleInventory/articleInventory.component';
import {LogoutComponent} from './logout/logout.component';
import {RegisterComponent} from './register/register.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {ImpressumComponent} from './impressum/impressum.component';
import {ShoppingcartComponent} from './shoppingcart/shoppingcart.component';
import {provideRouter, RouterConfig} from '@angular/router';
import {ArticleCheckoutComponent} from './articleCheckout/articleCheckout.component';
import {CreateArticleComponent} from './createArticle/createArticle.component';
import {ProfileComponent} from './profile/profile.component';

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
  { path: 'contact', component: ContactComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'shippment', component: ArticleCheckoutComponent},
  { path: 'insertArticle', component: CreateArticleComponent},
  { path: 'profile', component: ProfileComponent},
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
