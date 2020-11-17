import { Observable } from "rxjs/Observable";
import { HttpErrorResponse } from "@angular/common/http"

export class ErrorHandler {
    static handlerError(error: HttpErrorResponse | any) {
        let errorMessage: string;
        if (error instanceof HttpErrorResponse) {
            const body = error.error
            errorMessage = `Error ${error.status} ao tentar acessar URL: ${error.url} - ${error.statusText} Error: ${body}`
        } else {
            errorMessage = error.toString()
        }
        return Observable.throw(errorMessage)
    }
}
