"use strict";
var home_component_1 = require('./home/home.component');
var article_component_1 = require('./article/article.component');
var articleInventory_component_1 = require('./articleInventory/articleInventory.component');
var logout_component_1 = require('./logout/logout.component');
var register_component_1 = require('./register/register.component');
var about_component_1 = require('./about/about.component');
var contact_component_1 = require('./contact/contact.component');
var impressum_component_1 = require('./impressum/impressum.component');
var shoppingcart_component_1 = require('./shoppingcart/shoppingcart.component');
var router_1 = require('@angular/router');
var createArticle_component_1 = require('./createArticle/createArticle.component');
var profile_component_1 = require('./profile/profile.component');
var articleCheckout_routes_1 = require('./articleCheckout/articleCheckout.routes');
exports.APP_ROUTES = [
    { path: '', name: 'Home', component: home_component_1.HomeComponent },
    { path: 'article', name: 'Artikel', component: articleInventory_component_1.ArticleInventoryComponent },
    { path: 'article/:id', component: article_component_1.ArticleComponent }
];
exports.OTHER_ROUTES = [
    { path: 'logout', name: 'Logout', component: logout_component_1.LogoutComponent },
    { path: 'shoppingcart', component: shoppingcart_component_1.ShoppingcartComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'contact', component: contact_component_1.ContactComponent },
    { path: 'impressum', component: impressum_component_1.ImpressumComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'insertArticle', component: createArticle_component_1.CreateArticleComponent },
    { path: 'profile', component: profile_component_1.ProfileComponent },
    { path: '**', component: home_component_1.HomeComponent }
];
exports.routes = exports.APP_ROUTES.concat(articleCheckout_routes_1.CHECKOUT_ROUTES, exports.OTHER_ROUTES);
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map