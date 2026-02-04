import { Component } from '@angular/core';
import { FeaturedCard } from './featured-card/featured-card';

@Component({
  selector: 'featured',
  imports: [FeaturedCard],
  templateUrl: './featured.html',
  styleUrl: './featured.sass',
})
export class Featured {}
