import { Component, Input } from '@angular/core';

@Component({
  selector: 'star-rating',
  imports: [],
  templateUrl: './star-rating.html',
  styleUrl: './star-rating.scss'
})
export class StarRating {
  @Input()
  rating: number = 0;

  stars: number[] = [1,2,3];

  isYellow(i: number): boolean {
    return i <= this.rating;
  }

  star() {
    return `<svg class="hidden">
              <symbol id="star" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M31.77 11.857H19.74L15.99.5l-3.782 11.357H0l9.885 6.903-3.692 11.21 9.736-7.05 9.796 6.962-3.722-11.18 9.766-6.845z"
                  fill="currentColor" />
              </symbol>
            </svg>`
  }
}
