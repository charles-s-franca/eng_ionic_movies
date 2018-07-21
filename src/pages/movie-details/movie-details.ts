import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { MoviesProvider } from '../../providers/movies/movies';
import { AddCommentPage } from '../add-comment/add-comment';
import { CommentsProvider } from '../../providers/comments/comments';

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
    private moviesProvider: MoviesProvider,
    public modalCtrl: ModalController,
    private commentsProvider: CommentsProvider
  ) {
      this.movie_id = this.navParams.get("id");
      this.moviesProvider.geMovieDetails(this.movie_id).then(movie => {
        this.movie = movie;
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MovieDetailsPage');
  }

  addComment() {
    let commentModal = this.modalCtrl.create(AddCommentPage, { id: this.movie_id });
     commentModal.present();
  }

  backToList() {
    this.navCtrl.pop();
  }

  getComments() {
    return this.commentsProvider.getComments();
  }

}
