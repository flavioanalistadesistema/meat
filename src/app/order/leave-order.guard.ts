import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { OrderComponent } from "./order.component";

export class LeaveOrderGuard implements CanDeactivate<OrderComponent> {

  canDeactivate(
    orderComponent: OrderComponent,
    activatedRouter: ActivatedRouteSnapshot,
    routerState: RouterStateSnapshot): boolean {
    if (!orderComponent.isOrderComplet()
    ) {
      return window.confirm('Você não deseja continuar mais com suas compras?')
    } else {
      return true
    }
  }
}
