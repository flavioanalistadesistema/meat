import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

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
      transition('visible => hidden', animate('500ms 0 s ease-out'))
    ])
  ]
})
export class SnackbarComponent implements OnInit {

  message: string = 'Helo word!';
  snackVisibility: string = 'hidden'

  constructor() { }

  ngOnInit() {
  }

}
