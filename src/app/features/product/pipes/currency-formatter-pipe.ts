import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormatter',
  standalone: true
})
export class CurrencyFormatterPipe implements PipeTransform {
  transform(value: number, currency: string = 'INR'): string {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency
    }).format(value);
  }
}