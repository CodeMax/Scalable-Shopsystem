"use strict";
var testing_1 = require('@angular/core/testing');
var login_service_1 = require('./login.service');
testing_1.describe('Login Service', function () {
    testing_1.beforeEachProviders(function () { return [login_service_1.LoginService]; });
    testing_1.it('should ...', testing_1.inject([login_service_1.LoginService], function (service) {
        testing_1.expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=login.service.spec.js.map