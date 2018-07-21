import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MoviesProvider } from '../../providers/movies/movies';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  movies:any = [];

  constructor(
    public navCtrl: NavController,
    private moviesProvider: MoviesProvider
  ) {
    this.moviesProvider.getPopularMovies()
      .then(movies => {
        this.movies = movies;
      });
  }

}
