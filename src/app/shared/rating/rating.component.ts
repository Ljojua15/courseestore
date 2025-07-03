import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faStar,IconDefinition,faStarHalfStroke} from '@fortawesome/free-solid-svg-icons';
import {faStar as faStarEmpty} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'estore-rating',
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss'
})
export class RatingComponent {
  public faStar = faStar
  public faStarEmpty = faStarEmpty;
  public faStarHalfStroke = faStarHalfStroke

  public stars : IconDefinition[] = []

  private score = 0
  @Input()
  set scoreCalc(value: number) {
    this.score = value > 5 ? 5 : value;

    const solidStartsCounter = Math.floor(this.score)
    for (let i = 0; i < solidStartsCounter; i++) {
      this.stars.push(this.faStar)
    }

    if (this.score - solidStartsCounter > 0 && this.score - solidStartsCounter < 1) {
      this.stars.push(this.faStarHalfStroke)
    }

    for (let i = this.stars.length; i < 0; i++) {
      this.stars.push(this.faStarEmpty)
    }

  }


}
