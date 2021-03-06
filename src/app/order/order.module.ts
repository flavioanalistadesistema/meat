import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrderItensComponent } from './order-itens/order-itens.component';
import { DeliveryCostsComponent } from './delivery-costs/delivery-costs.component'
import { OrderComponent } from './order.component';

import { SharedModule } from '../shared/shared.module'

const routes: Routes = [
    { path: '', component: OrderComponent}
]

@NgModule({
    declarations: [
        OrderComponent,
        OrderItensComponent,
        DeliveryCostsComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ]
})

export class OrderModule { }