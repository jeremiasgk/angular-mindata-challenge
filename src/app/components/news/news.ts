import { Component } from '@angular/core';
import { NewsCard } from "./news-card/news-card";

@Component({
  selector: 'news',
  imports: [NewsCard],
  templateUrl: './news.html',
  styleUrl: './news.sass',
})
export class News {}
