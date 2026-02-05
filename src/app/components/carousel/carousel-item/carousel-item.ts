import { Component, Input } from '@angular/core';
import { CarouselItem as ICarouselItem } from '../../../interfaces/carousel.interface';

@Component({
  selector: 'carousel-item',
  imports: [],
  templateUrl: './carousel-item.html',
  styleUrl: './carousel-item.sass',
})
export class CarouselItem {
  @Input() item!: ICarouselItem;
  @Input() index: number = 0;
  @Input() total: number = 0;
}
