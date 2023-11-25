import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CarouselComponent } from '../../../carousel/src/lib/carousel.component';

@Component({
  selector: 'yl-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CarouselComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'carousel-showcase';
}
