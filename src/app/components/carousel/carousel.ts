import { Component } from '@angular/core';
import { CarouselItem } from './carousel-item/carousel-item';

@Component({
  selector: 'carousel',
  imports: [CarouselItem],
  templateUrl: './carousel.html',
  styleUrl: './carousel.sass',
})
export class Carousel {}
