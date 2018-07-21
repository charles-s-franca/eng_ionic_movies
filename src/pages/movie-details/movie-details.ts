import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MoviesProvider } from '../../providers/movies/movies';

/**
 * Generated class for the MovieDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-movie-details',
  templateUrl: 'movie-details.html',
})
export class MovieDetailsPage {
  movie_id: number;
  movie: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private moviesProvider: MoviesProvider
  ) {
      this.movie_id = this.navParams.get("id");
      this.moviesProvider.geMovieDetails(this.movie_id).then(movie => {
        this.movie = movie;
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MovieDetailsPage');
  }

}
