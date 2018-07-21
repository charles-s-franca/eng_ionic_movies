import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the MovieCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'movie-card',
  templateUrl: 'movie-card.html'
})
export class MovieCardComponent {

  @Input() movie: any;
  @Output() onMovieClicked = new EventEmitter();

  constructor() {

  }

  movieClicked(movie) {
    this.onMovieClicked.emit(movie.id);
  }

}
