"use strict";
var home_component_1 = require('./home/home.component');
var article_component_1 = require('./article/article.component');
var articleInventory_component_1 = require('./articleInventory/articleInventory.component');
var logout_component_1 = require('./logout/logout.component');
var register_component_1 = require('./register/register.component');
exports.APP_ROUTES = [
    { path: '/', name: 'Home', component: home_component_1.HomeComponent },
    { path: '/article', name: 'Artikel', component: articleInventory_component_1.ArticleInventoryComponent },
    // { path: '/account', name: 'Account', component: DashboardComponent },
    { path: '/article/:id', component: article_component_1.ArticleComponent }
];
exports.APP_ROUTES_RIGHT = [
    { path: '/register', component: register_component_1.RegisterComponent },
    { path: '/logout', name: 'Logout', component: logout_component_1.LogoutComponent }
];
//# sourceMappingURL=app.routes.js.map