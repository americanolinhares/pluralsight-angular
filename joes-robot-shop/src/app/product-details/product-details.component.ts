import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product.model';
import { NgFor, NgIf, CurrencyPipe, NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'bot-product-details',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, NgStyle, CurrencyPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  @Input() productDetail!: IProduct;
  @Output() buy = new EventEmitter()

  buyButtonClicked(product: IProduct){
    console.log('buyButtonClicked product ',product);
    this.buy.emit(product);
  }

  getImageUrl(product: IProduct) {
    if (!product) return '';
    return '/assets/images/robot-parts/' + product.imageName;
  }

  getDiscountedClasses(product: IProduct) {
    if (product.discount > 0) return 'strikethrough';
    else return '';
  }


}
