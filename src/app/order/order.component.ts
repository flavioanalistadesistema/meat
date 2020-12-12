import { Component, ComponentFactoryResolver, OnInit } from "@angular/core";
import { CartItem } from "app/restaurant-datail/shopping-cart/sopping-cart.model";
import { RadioOption } from "app/shared/radio/radio-option.model";
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from "@angular/forms";

import { OrderService } from "./order.service";
import { Order, OrderItem } from "./order.model";
import { Router } from "@angular/router";

import 'rxjs/add/operator/do'

@Component({
  selector: "mt-order",
  templateUrl: "./order.component.html",
})
export class OrderComponent implements OnInit {
  delivery: number = 10;
  orderForm: FormGroup;
  orderId: string

  errorMessage = " E-mails devem ser iguais";

  emailPather = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  numberPattern = /^[0-9]*$/;

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
    this.orderForm = this.formBuilder.group(
      {
        name: this.formBuilder.control("", [
          Validators.required,
          Validators.minLength(5),
        ]),
        email: this.formBuilder.control("", [
          Validators.required,
          Validators.pattern(this.emailPather),
        ]),
        confirmEmail: this.formBuilder.control("", [
          Validators.required,
          Validators.pattern(this.emailPather),
        ]),
        address: this.formBuilder.control("", [
          Validators.required,
          Validators.minLength(5),
        ]),
        number: this.formBuilder.control("", [
          Validators.required,
          Validators.pattern(this.numberPattern),
        ]),
        optionAddress: this.formBuilder.control(""),
        paymentOption: this.formBuilder.control("", [Validators.required]),
      },
      { validator: OrderComponent.qualsTo }
    );
  }

  static qualsTo(group: AbstractControl): { [key: string]: boolean } {
    const email = group.get("email");
    const confirmEmail = group.get("confirmEmail");

    if (!email || !confirmEmail) {
      return undefined;
    }

    if (email.value != confirmEmail.value) {
      return { emailCheck: true };
    }

    return undefined;
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

    this.orderService.checkout(order)
      .do(orderId=> this.orderId = orderId)
      .subscribe((order: string) => {
      this.router.navigate(["/order-summary"]);
    });
  }

  isOrderComplet(){
    return false
  }
}
