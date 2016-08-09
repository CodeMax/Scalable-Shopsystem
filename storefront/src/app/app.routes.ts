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
import {CreateArticleComponent} from './createArticle/createArticle.component';
import {ProfileComponent} from './profile/profile.component';
import {CHECKOUT_ROUTES} from './articleCheckout/articleCheckout.routes';

export const APP_ROUTES = [
    { path: '', name: 'Home', component: HomeComponent },
    { path: 'article', name: 'Artikel', component: ArticleInventoryComponent },
    { path: 'article/:id', component: ArticleComponent }
];

export const OTHER_ROUTES = [
  { path: 'logout', name: 'Logout', component: LogoutComponent },
  { path: 'shoppingcart', component: ShoppingcartComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'insertArticle', component: CreateArticleComponent},
  { path: 'profile', component: ProfileComponent},
  { path: '**', component: HomeComponent }
];

export const routes: RouterConfig = [
  ...APP_ROUTES,
  ...CHECKOUT_ROUTES,
  ...OTHER_ROUTES
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
