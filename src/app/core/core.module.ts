import { NgModule } from '@angular/core';

import { RestaurantsService } from '../restaurants/restaurants.service'
import { OrderService } from '../order/order.service'
import { ShoppingCartService } from '../restaurant-datail/shopping-cart/shopping-cart.service'

@NgModule({
    providers: [
        RestaurantsService,
        OrderService,
        ShoppingCartService
    ]
})

export class CoreModule { }