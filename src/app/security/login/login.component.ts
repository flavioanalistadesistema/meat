import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'

import { LoginService } from './login.service'
import { NotificationService } from '../../shared/mensages/notification.service'

@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup

  navegateTo: string

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private notificationService: NotificationService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required])
    })
    this.navegateTo = this.activatedRoute.snapshot.params['to'] || '/'
  }

  login(){
    this.loginService.login(
      this.loginForm.value.email,
      this.loginForm.value.password )
      .subscribe(
        user => this.notificationService.notificate(`Bem vindo(a) ${user.name}`),
        respError => this.notificationService.notificate(respError.error.mensage),
        ()=> this.router.navigate([this.navegateTo]))
  }
}
