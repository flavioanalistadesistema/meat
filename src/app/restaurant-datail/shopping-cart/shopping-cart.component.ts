import { Component, OnInit } from '@angular/core'
import { ShoppingCartService } from './shopping-cart.service';
import { MenuItem } from '../menu-item/menu-item.model';
import { CartItem } from './sopping-cart.model';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {
  
  constructor(
    private shoppingCartService: ShoppingCartService
  ) { }

  ngOnInit() {
  }

  items(): any[] {
    return this.shoppingCartService.items
  }

  allAmount(): number {
    return this.shoppingCartService.allAmount()
  }

  addItem(item: MenuItem) {
    this.shoppingCartService.addItem(item)
  }

  clear() {
    this.shoppingCartService.clear()
  }

  removeItem(item: CartItem) {
    this.shoppingCartService.removeItem(item)
  }

}
