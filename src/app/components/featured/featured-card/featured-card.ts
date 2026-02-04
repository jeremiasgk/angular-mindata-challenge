import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'featured-card',
  imports: [],
  templateUrl: './featured-card.html',
  styleUrl: './featured-card.sass',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturedCard {}
