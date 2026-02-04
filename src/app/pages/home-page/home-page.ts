import { Component } from '@angular/core';
import { Featured } from '../../components/featured/featured';
import { News } from '../../components/news/news';
import { Carousel } from '../../components/carousel/carousel';

@Component({
  selector: 'home-page',
  imports: [Featured, News, Carousel],
  templateUrl: './home-page.html',
  styleUrl: './home-page.sass',
})
export class HomePage {}
