import { CanLoad, Route, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router'
import { Injectable } from '@angular/core'
import { LoginService } from './login/login.service'

@Injectable()
export class LoggedInGuard implements CanLoad, CanActivate {

  constructor(
    private loginService: LoginService
  ) { }

  checkoutLogin(path: string): boolean {

    let isLogin = this.loginService.isLoggedIn()
    if (!isLogin) {
      this.loginService.handleLogin(`/${path}`)
    }
    return isLogin
  }
  canLoad(route: Route): boolean {
    console.log('canLoad')

    return this.checkoutLogin(route.path)
  }

  canActivate(activatedRoute: ActivatedRouteSnapshot, routerStatus: RouterStateSnapshot): boolean{
    console.log('canActive');
    return this.checkoutLogin(activatedRoute.routeConfig.path)
  }
}
