import { Component, Input } from '@angular/core';
import { Product } from '../../data/mock-data';
import { NgStyle } from '@angular/common';
import { StarRatingComponent } from '../star-rating/star-rating';
import { CurrencyFormatterPipe } from '../../pipes/currency-formatter-pipe';
import { TimeAgoPipe } from '../../pipes/time-ago-pipe';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    NgStyle,
    StarRatingComponent,
    CurrencyFormatterPipe,
    TimeAgoPipe
  ],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css']
})
export class ProductCardComponent {

  @Input() product!: Product;

  updateRating(rating: number) {
    this.product.rating = rating;
  }
}