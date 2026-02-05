import { Component, Input } from '@angular/core';
import { NewsItem } from '../../../interfaces/news.interface';

@Component({
  selector: 'news-card',
  imports: [],
  templateUrl: './news-card.html',
  styleUrl: './news-card.sass',
})
export class NewsCard {
  @Input() item!: NewsItem;
  @Input() index: number = 0;
  @Input() total: number = 0;
}
