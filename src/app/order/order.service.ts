import { Injectable } from '@angular/core'
import { ShoppingCartService } from "app/restaurant-datail/shopping-cart/shopping-cart.service";
import { CartItem } from "app/restaurant-datail/shopping-cart/sopping-cart.model";

import { Order} from "./order.model";
import { MEAT_API } from "../app.api"
import { LoginService } from "../security/login/login.service"

import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from "rxjs/Observable"
import "rxjs/add/operator/map"

@Injectable()
export class OrderService {

    constructor(
        private cartService: ShoppingCartService,
        private http: HttpClient,
        private loginService: LoginService
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

    checkout(order: Order): Observable<string>{
        let headers = new HttpHeaders()
        if (this.loginService.isLoggedIn()) {
          headers = headers.set('Authorization', `Bearer ${this.loginService.user.accesToken}`)
          console.log('headers', headers)
        }

        return this.http.post<Order>(`${MEAT_API}/orders`,order, {headers: headers})
            .map(order => order.id)
    }
}
