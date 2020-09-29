import { Component, OnInit } from '@angular/core';
import { CartItem } from 'app/restaurant-datail/shopping-cart/sopping-cart.model';
import { RadioOption } from 'app/shared/radio/radio-option.model';
import { OrderService } from './order.service';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  delivery: number = 10;

  paymentOptions: RadioOption[] = [
    { label: 'Dinheiro', value: 'MORN' },
    { label: 'Cartão de Crédito', value: 'CRED' },
    { label: 'Cartão de Débito', value: 'DEB' },
    { label: 'Vale Refeição', value: 'VR'}
  ]  
  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit() {
  } 

  itemsValue(): number {
    return this.orderService.itemsValue()
  }

  cartItems(): CartItem[] {
    return this.orderService.items()
  }

  increaseQty(item: CartItem): void {
    this.orderService.increaseQty(item)
  }

  decreaseQty(item: CartItem): void {
    this.orderService.decreaseQty(item)
  }

  removeItem(item: CartItem): void {
    this.orderService.removeItem(item)
  }

}
