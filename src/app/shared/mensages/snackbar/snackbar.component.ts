import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { NotificationService } from '../notification.service'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'mt-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  animations: [
    trigger('snack-visibility', [
      state('hidden', style({
        button: '0px',
        opacity:0
      })),
      state('visible', style({
        button: '30px',
        opacity:1
      })),
      transition('hidden => visible', animate('500ms 0s ease-in')),
      transition('visible => hidden', animate('500ms 0s ease-out'))
    ])
  ]
})
export class SnackbarComponent implements OnInit {

  message: string = 'Helo word!';
  snackVisibility: string = 'hidden'

  constructor(
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.notificationService.notifier
      .do(message => {
        this.message = message
        this.snackVisibility = 'visible'
      }).switchMap(message => Observable.timer(3000))
        .subscribe(timer=> this.snackVisibility = 'hidden')
  }

  visibleMessage() {
    this.snackVisibility = this.snackVisibility === 'hidden' ? 'visible' : 'hidden';
  }

}
