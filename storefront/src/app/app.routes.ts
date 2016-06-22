import {HomeComponent} from './home/home.component';
import {ArticleComponent} from './article/article.component';
import {LoginComponent} from './login/login.component';
import {ArticleInventoryComponent} from './articleInventory/articleInventory.component';

export var APP_ROUTES: any[] = [
    { path: '/', name: 'Home', component: HomeComponent },
    { path: '/**', redirectTo: ['Home'] },
    { path: '/articleInventory', name: 'Articles', component: ArticleInventoryComponent },
    { path: '/login', name: 'Login', component: LoginComponent },
    { path: '/articleInventory/article', component: ArticleComponent}
];
