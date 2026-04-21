import { Component, signal, computed } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ProductCardComponent } from './features/product/components/product-card/product-card';
import { PRODUCTS } from './features/product/data/mock-data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, NgIf, ProductCardComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {

  search = signal('');

  products = PRODUCTS;

  filteredProducts = computed(() =>
    this.products.filter(p =>
      p.name.toLowerCase().includes(this.search().toLowerCase())
    )
  );

  updateSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    this.search.set(input.value);
  }
}