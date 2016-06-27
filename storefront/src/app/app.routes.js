"use strict";
var home_component_1 = require('./home/home.component');
var article_component_1 = require('./article/article.component');
var articleInventory_component_1 = require('./articleInventory/articleInventory.component');
exports.APP_ROUTES = [
    { path: '/', name: 'Home', component: home_component_1.HomeComponent },
    { path: '/articleInventory', name: 'Articles', component: articleInventory_component_1.ArticleInventoryComponent },
    // { path: '/account', name: 'Account', component: DashboardComponent },
    { path: '/articleInventory/article', component: article_component_1.ArticleComponent }
];
//# sourceMappingURL=app.routes.js.map