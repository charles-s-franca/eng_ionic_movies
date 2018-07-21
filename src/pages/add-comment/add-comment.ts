import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { CommentsProvider } from '../../providers/comments/comments';
import { CommentModel } from '../../models/comment.model';

/**
 * Generated class for the AddCommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-comment',
  templateUrl: 'add-comment.html',
})
export class AddCommentPage {
  movie_id: number;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private commentsProvider: CommentsProvider,
    public viewCtrl: ViewController
  ) {
    this.movie_id = navParams.get("id") || 5;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCommentPage');
  }

  addComment(comment_text) {
    var comment = new CommentModel();
    comment.comment = comment_text;
    comment.date = new Date();
    comment.movie_id = this.movie_id;
    this.commentsProvider.addComment(comment);
    this.closeModal();
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

}
