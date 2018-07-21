import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommentModel } from '../../models/comment.model';

/*
  Generated class for the CommentsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommentsProvider {
  COMMENT_STORAGE_NAME= "COMMENTS";
  constructor(public http: HttpClient) {
    console.log('Hello CommentsProvider Provider');
  }

  addComment(comment: CommentModel) {
    var comments = [];
    var comments_storage = localStorage.getItem(this.COMMENT_STORAGE_NAME);
    if(comments_storage){
      comments = JSON.parse(comments_storage);
    }
    comments.push(comment);
    localStorage.setItem(this.COMMENT_STORAGE_NAME, JSON.stringify(comments));
  }

  getComments() {
    var comments = [];
    var comments_storage = localStorage.getItem(this.COMMENT_STORAGE_NAME);
    if(comments_storage){
      comments = JSON.parse(comments_storage);
    }
    return comments;
  }

}
