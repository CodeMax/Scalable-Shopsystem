"use strict";
var articleCheckout_component_1 = require('./articleCheckout.component');
var delivery_component_1 = require('./delivery/delivery.component');
var payment_component_1 = require('./payment/payment.component');
var confirmation_component_1 = require('./confirmation/confirmation.component');
exports.CHECKOUT_ROUTES = [
    {
        path: 'checkout',
        component: articleCheckout_component_1.ArticleCheckoutComponent,
        children: [
            /* { path: '', redirectTo: 'delivery', pathMatch: 'full' }, */
            { path: 'delivery', component: delivery_component_1.DeliveryComponent },
            { path: 'payment', component: payment_component_1.PaymentComponent },
            { path: 'confirmation', component: confirmation_component_1.ConfirmationComponent }
        ]
    }
];
//# sourceMappingURL=articleCheckout.routes.js.map