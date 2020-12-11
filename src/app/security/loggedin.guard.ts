import { CanLoad, Route } from '@angular/router'
import { Injectable } from '@angular/core'
import { LoginService } from './login/login.service'

@Injectable()
export class LoggedInGuard implements CanLoad {

  constructor(
    private loginService: LoginService
  ) { }

  canLoad(route: Route): boolean {
    console.log(route);

    let isLogin = this.loginService.isLoggedIn()
    if (!isLogin) {
      this.loginService.handleLogin(`/${route.path}`)
    }
    return isLogin
  }
}
