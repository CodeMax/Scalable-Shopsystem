import {ArticleCheckoutComponent} from './articleCheckout.component';
import {DeliveryComponent} from './delivery/delivery.component';
import {PaymentComponent} from './payment/payment.component';
import {ConfirmationComponent} from './confirmation/confirmation.component';

export const CHECKOUT_ROUTES = [
  {
    path: 'checkout',
    component: ArticleCheckoutComponent,
    children: [
      /* { path: '', redirectTo: 'delivery', pathMatch: 'full' }, */
      { path: 'delivery', component: DeliveryComponent },
      { path: 'payment', component: PaymentComponent },
      { path: 'confirmation', component: ConfirmationComponent }
    ]
  }
];
