import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from 'app/restaurant-datail/shopping-cart/sopping-cart.model';

@Component({
  selector: 'mt-order-itens',
  templateUrl: './order-itens.component.html'
})
export class OrderItensComponent implements OnInit {

  @Input() items: CartItem[]
  @Output() increaseQty = new EventEmitter<CartItem>()
  @Output() decreaseQty = new EventEmitter<CartItem>()
  @Output() remove = new EventEmitter<CartItem>()

  value: any

  constructor() { }

  ngOnInit() {
  }

  emitIncreaseQty(item: CartItem) {
    this.increaseQty.emit(item)
  }

  emitDecreaseQty(item: CartItem) {
    this.decreaseQty.emit(item)
  }

  emitRemove(item: CartItem) {
    this.remove.emit(item)
  }




}
