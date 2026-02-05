import { Component } from '@angular/core';
import { NewsCard } from './news-card/news-card';
import { NewsItem } from '../../interfaces/news.interface';

@Component({
  selector: 'news',
  imports: [NewsCard],
  templateUrl: './news.html',
  styleUrl: './news.sass',
})
export class News {
  newsList: NewsItem[] = Array(6)
    .fill(null)
    .map((_, i) => ({
      id: i + 1,
      imageUrl: 'https://placehold.co/493x277?text=IMAGE',
      tag: 'Lorem ipsum dolor sit amet.',
      title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.',
    }));
}
