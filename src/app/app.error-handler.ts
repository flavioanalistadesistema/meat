import { ErrorHandler, Injectable, Injector, NgZone } from '@angular/core'
import { HttpErrorResponse } from "@angular/common/http"
import { NotificationService } from './shared/mensages/notification.service';
import { LoginService } from './security/login/login.service';

@Injectable()
export class AplicationErrorHandler extends ErrorHandler {

  constructor(
    private nt: NotificationService,
    private ij: Injector,
    private zone: NgZone
  ) {
    super()
  }

  handlerError(errorResponse: HttpErrorResponse | any) {
    if (errorResponse instanceof HttpErrorResponse) {

      const message = errorResponse.error.message
      this.zone.run(() => {
        switch (errorResponse.status) {
          case 401:
            this.ij.get(LoginService).handleLogin()
            break;
          case 403:
            this.nt.notificate(message || "Não autorizado")
            break;
          case 401:
            this.nt.notificate(message || "Recurso não encontrado, verifique console para mais detalhes")
            break;
          default:
            "Nõ foi possivel concluir sua solicitação"
            break;
        }
      })
    }
    super.handleError(errorResponse)
  }
}
