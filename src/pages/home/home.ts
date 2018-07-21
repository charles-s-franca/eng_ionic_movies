import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MoviesProvider } from '../../providers/movies/movies';
import { MovieDetailsPage } from '../movie-details/movie-details';

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

  goToDetails(id){
    this.navCtrl.push(MovieDetailsPage, {
      id: id
    });
  }

}
