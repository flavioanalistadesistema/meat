import { Component, ComponentFactoryResolver, OnInit } from "@angular/core";
import { CartItem } from "app/restaurant-datail/shopping-cart/sopping-cart.model";
import { RadioOption } from "app/shared/radio/radio-option.model";
import { FormGroup, FormBuilder } from "@angular/forms";

import { OrderService } from "./order.service";
import { Order, OrderItem } from "./order.model";

import { Router } from "@angular/router";

@Component({
  selector: "mt-order",
  templateUrl: "./order.component.html",
})
export class OrderComponent implements OnInit {
  delivery: number = 10;
  orderForm: FormGroup;

  paymentOptions: RadioOption[] = [
    { label: "Dinheiro", value: "MORN" },
    { label: "Cartão de Crédito", value: "CRED" },
    { label: "Cartão de Débito", value: "DEB" },
    { label: "Vale Refeição", value: "VR" },
  ];
  constructor(
    private orderService: OrderService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      name:           this.formBuilder.control(""),
      email:          this.formBuilder.control(""),
      confirmEmail:   this.formBuilder.control(""),
      address:        this.formBuilder.control(""),
      number:         this.formBuilder.control(""),
      optionAddress:  this.formBuilder.control(""),
      paymentOption:  this.formBuilder.control(""),
    });
  }

  itemsValue(): number {
    return this.orderService.itemsValue();
  }

  cartItems(): CartItem[] {
    return this.orderService.items();
  }

  increaseQty(item: CartItem): void {
    this.orderService.increaseQty(item);
  }

  decreaseQty(item: CartItem): void {
    this.orderService.decreaseQty(item);
  }

  removeItem(item: CartItem): void {
    this.orderService.removeItem(item);
  }

  checkout(order: Order): void {
    order.orderItems = this.cartItems().map(
      (item: CartItem) => new OrderItem(item.quantity, item.menuItem.id)
    );

    this.orderService.checkout(order).subscribe((order: string) => {
      this.router.navigate(["/order-summary"]);
    });

    console.log("order", order);
  }
}
