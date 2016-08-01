"use strict";
var home_component_1 = require('./home/home.component');
var article_component_1 = require('./article/article.component');
var articleInventory_component_1 = require('./articleInventory/articleInventory.component');
var logout_component_1 = require('./logout/logout.component');
var register_component_1 = require('./register/register.component');
var about_component_1 = require('./about/about.component');
var shoppingcart_component_1 = require('./shoppingcart/shoppingcart.component');
var router_1 = require('@angular/router');
var articleCheckout_component_1 = require('./articleCheckout/articleCheckout.component');
exports.APP_ROUTES = [
    { path: '', name: 'Home', component: home_component_1.HomeComponent },
    { path: 'article', name: 'Artikel', component: articleInventory_component_1.ArticleInventoryComponent },
    { path: 'article/:id', component: article_component_1.ArticleComponent }
];
exports.APP_ROUTES_RIGHT = [
    { path: 'logout', name: 'Logout', component: logout_component_1.LogoutComponent }
];
exports.OTHER_ROUTES = [
    { path: 'shoppingcart', component: shoppingcart_component_1.ShoppingcartComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'shippment', component: articleCheckout_component_1.ArticleCheckoutComponent },
    { path: '**', component: home_component_1.HomeComponent }
];
exports.routes = exports.APP_ROUTES.concat(exports.APP_ROUTES_RIGHT, exports.OTHER_ROUTES);
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map