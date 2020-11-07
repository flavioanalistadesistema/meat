import { MenuItem } from './../menu-item/menu-item.model'
import { CartItem } from './sopping-cart.model'
import { NotificationService } from '../../shared/mensages/notification.service'

import { Injectable } from '@angular/core'


@Injectable()
export class ShoppingCartService {

    items: CartItem[] = []

    constructor(
        private notificationService: NotificationService
    ) {}

    clear() { 
        this.items = []
        this.notificationService.notificate(`Esvaziou o carrinho`)
    }
    
    addItem(item: MenuItem) {
        let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id)
        if (foundItem) {
            this.increaseService(foundItem)
        } else {
            this.items.push(new CartItem(item))
        }
        this.notificationService.notificate(`Adicionou o item: ${item.name}`)
    }
    
    increaseService(item: CartItem): void {
        item.quantity = item.quantity + 1
    }

    decreaseService(item: CartItem): void {
        item.quantity = item.quantity - 1
        if (item.quantity === 0) {
            this.removeItemService(item)
        }
    }
    
    removeItemService(item: CartItem) {
        this.items.splice(this.items.indexOf(item), 1)
        this.notificationService.notificate(`Removel o item: ${item.menuItem.name}`)
     }

    allAmount(): number{
        return this.items
            .map(item => item.value())
            .reduce((prev, value)=> prev + value, 0)
    }
}