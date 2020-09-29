import { Injectable } from '@angular/core'
import { ShoppingCartService } from "app/restaurant-datail/shopping-cart/shopping-cart.service";
import { CartItem } from "app/restaurant-datail/shopping-cart/sopping-cart.model";

@Injectable()
export class OrderService {
    
    constructor(
        private cartService: ShoppingCartService
    ) { }
    
    items(): CartItem[] {
        return this.cartService.items
    }

    itemsValue(): number {
        return this.cartService.allAmount()
    }

    increaseQty(item: CartItem): void{
        this.cartService.increaseService(item)
    }

    decreaseQty(item: CartItem): void{
        this.cartService.decreaseService(item)
    }

    removeItem(item: CartItem): void{
        this.cartService.removeItemService(item)
    }


}