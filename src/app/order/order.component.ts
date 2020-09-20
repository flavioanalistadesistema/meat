import { Component, OnInit } from '@angular/core';
import { RadioOption } from '../shared/radio/radio-option.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  
  paymentoptions: RadioOption[] = [
    { label: 'Dinheiro', value: 'MON' },
    { label: 'Cartão de Crédito', value: 'CART' },
    { label: 'Débito', value: 'DEB' }
  ]
  
  constructor() { }

  ngOnInit() {
  } 

}
