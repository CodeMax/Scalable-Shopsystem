"use strict";
var home_component_1 = require('./home/home.component');
var simple_component_1 = require('./simple/simple.component');
var login_component_1 = require('./login/login.component');
exports.APP_ROUTES = [
    { path: '/', name: 'Home', component: home_component_1.HomeComponent },
    { path: '/simple', name: 'Article', component: simple_component_1.SimpleComponent },
    { path: '/login', name: 'Login', component: login_component_1.LoginComponent }
];

//# sourceMappingURL=app.routes.js.map
