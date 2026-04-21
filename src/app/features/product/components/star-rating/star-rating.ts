import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './star-rating.html',
  styleUrls: ['./star-rating.css']
})
export class StarRatingComponent {

  @Input() rating = 0;
  @Output() ratingChange = new EventEmitter<number>();

  stars = [1, 2, 3, 4, 5];

  selectRating(value: number) {
    this.ratingChange.emit(value);
  }
}