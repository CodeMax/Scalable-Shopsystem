import {HomeComponent} from './home/home.component';
import {ArticleComponent} from './article/article.component';
import {LoginComponent} from './login/login.component';
import {ArticleInventoryComponent} from './articleInventory/articleInventory.component';

export var APP_ROUTES: any[] = [
    { path: '/', name: 'Home', component: HomeComponent },
    { path: '/articleInventory', name: 'Articles', component: ArticleInventoryComponent },
    // { path: '/account', name: 'Account', component: DashboardComponent },
    { path: '/articleInventory/article', component: ArticleComponent}
];
