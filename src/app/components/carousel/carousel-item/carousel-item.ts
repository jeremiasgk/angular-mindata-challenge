import { Component, input } from '@angular/core';
import { CarouselItem as ICarouselItem } from '../../../interfaces/carousel.interface';

@Component({
  selector: 'carousel-item',
  imports: [],
  templateUrl: './carousel-item.html',
  styleUrl: './carousel-item.sass',
})
export class CarouselItem {
  item = input.required<ICarouselItem>();
  index = input<number>(0);
  total = input<number>(0);
}
