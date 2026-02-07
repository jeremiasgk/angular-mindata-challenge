import { Component, input } from '@angular/core';
import { NewsItem } from '../../../interfaces/news.interface';

@Component({
  selector: 'news-card',
  imports: [],
  templateUrl: './news-card.html',
  styleUrl: './news-card.sass',
})
export class NewsCard {
  item = input.required<NewsItem>();
  index = input<number>(0);
  total = input<number>(0);
}
