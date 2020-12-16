import { NgModule, ModuleWithProviders } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { HTTP_INTERCEPTORS } from '@angular/common/http'

import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';
import { RatingComponent } from './rating/rating.component';

import { OrderService } from 'app/order/order.service';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { ShoppingCartService } from 'app/restaurant-datail/shopping-cart/shopping-cart.service';
import { SnackbarComponent } from './mensages/snackbar/snackbar.component';
import { NotificationService } from './mensages/notification.service';
import { LoginService } from 'app/security/login/login.service';
import { LoggedInGuard } from 'app/security/loggedin.guard';
import { LeaveOrderGuard } from 'app/order/leave-order.guard'
import { AuthInterceptor } from 'app/security/auth.interceptor';

@NgModule({
    declarations: [InputComponent, RadioComponent, RatingComponent, SnackbarComponent],
    imports: [FormsModule, ReactiveFormsModule, CommonModule],
    exports: [
        SnackbarComponent,
        InputComponent,
        RadioComponent,
        RatingComponent,
        FormsModule,
        ReactiveFormsModule,
        CommonModule
    ]
})



export class SharedModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                OrderService,
                RestaurantsService,
                ShoppingCartService,
                NotificationService,
                LoginService,
                LoggedInGuard,
                LeaveOrderGuard,
                {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
            ]
        }
    }
}
