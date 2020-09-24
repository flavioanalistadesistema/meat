import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/shared/radio/radio-option.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  paymentOptions: RadioOption[] = [
    { label: 'Dinheiro', value: 'MORN' },
    { label: 'Cartão de Crédito', value: 'CRED' },
    { label: 'Cartão de Débito', value: 'DEB' },
    { label: 'Vale Refeição', value: 'VR'}
  ]  
  constructor() { }

  ngOnInit() {
  } 

}
