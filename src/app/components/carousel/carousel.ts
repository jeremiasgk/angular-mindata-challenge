import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CarouselItem } from './carousel-item/carousel-item';
import { CarouselItem as ICarouselItem } from '../../interfaces/carousel.interface';

@Component({
  selector: 'carousel',
  imports: [CarouselItem],
  templateUrl: './carousel.html',
  styleUrl: './carousel.sass',
})
export class Carousel implements AfterViewInit {
  @ViewChild('carouselContainer')
  carouselContainer!: ElementRef<HTMLUListElement>;

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

  ngAfterViewInit() {
    const slider = this.carouselContainer.nativeElement;

    // Mouse Events for Dragging
    slider.addEventListener('mousedown', (e) => {
      this.isDown = true;
      slider.classList.add('active');
      this.startX = e.pageX - slider.offsetLeft;
      this.scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
      this.isDown = false;
      slider.classList.remove('active');
    });

    slider.addEventListener('mouseup', () => {
      this.isDown = false;
      slider.classList.remove('active');
    });

    slider.addEventListener('mousemove', (e) => {
      if (!this.isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - this.startX) * 2; // Scroll-fast
      slider.scrollLeft = this.scrollLeft - walk;
    });

    // Keyboard Events for Arrow Keys
    slider.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') {
        slider.scrollBy({ left: 300, behavior: 'smooth' });
      } else if (e.key === 'ArrowLeft') {
        slider.scrollBy({ left: -300, behavior: 'smooth' });
      }
    });
  }
}
