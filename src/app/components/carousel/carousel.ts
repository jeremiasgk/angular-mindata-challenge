import { Component, ElementRef, viewChild } from '@angular/core';
import { CarouselItem } from './carousel-item/carousel-item';
import { CarouselItem as ICarouselItem } from '../../interfaces/carousel.interface';

@Component({
  selector: 'carousel',
  imports: [CarouselItem],
  templateUrl: './carousel.html',
  styleUrl: './carousel.sass',
})
export class Carousel {
  carouselContainer =
    viewChild.required<ElementRef<HTMLUListElement>>('carouselContainer');

  items: ICarouselItem[] = Array(4)
    .fill(null)
    .map((_, i) => ({
      id: i + 1,
      imageUrl: 'https://placehold.co/362x482?text=IMAGE',
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet consectetur.',
    }));

  private isDown = false;
  private startX = 0;
  private scrollLeft = 0;

  onMouseDown(e: MouseEvent) {
    this.isDown = true;
    const slider = this.carouselContainer().nativeElement;
    slider.classList.add('active');
    this.startX = e.pageX - slider.offsetLeft;
    this.scrollLeft = slider.scrollLeft;
  }

  onMouseLeave() {
    this.isDown = false;
    this.carouselContainer().nativeElement.classList.remove('active');
  }

  onMouseUp() {
    this.isDown = false;
    this.carouselContainer().nativeElement.classList.remove('active');
  }

  onMouseMove(e: MouseEvent) {
    if (!this.isDown) return;
    e.preventDefault();
    const slider = this.carouselContainer().nativeElement;
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - this.startX) * 2;
    slider.scrollLeft = this.scrollLeft - walk;
  }

  onKeyDown(e: KeyboardEvent) {
    const slider = this.carouselContainer().nativeElement;
    if (e.key === 'ArrowRight') {
      slider.scrollBy({ left: 300, behavior: 'smooth' });
    } else if (e.key === 'ArrowLeft') {
      slider.scrollBy({ left: -300, behavior: 'smooth' });
    }
  }
}
