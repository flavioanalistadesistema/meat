import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent implements OnInit {

  @Output() rated = new EventEmitter<boolean>();
  @Output() ratedOff = new EventEmitter<boolean>();

  public ratings: number[] = [1, 2, 3, 4, 5]
  public rating: number = 0

  public temporaryRating: number = undefined

  constructor() { }

  ngOnInit() {
  }

  selectRating(r: number) {
    this.rating = r
    this.temporaryRating = undefined
    this.rated.emit()
  }

  setTemporaryRate(r: number) {
    if (this.temporaryRating === undefined) {
        this.temporaryRating = this.rating
    }
    this.rating = r
  }

  clearTemporaryRate() {
    if (this.temporaryRating !== undefined) { 
      this.rating = this.temporaryRating
      this.temporaryRating = undefined
      this.ratedOff.emit()
    }
  }

}
