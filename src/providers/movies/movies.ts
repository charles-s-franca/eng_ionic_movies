import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { resolveDefinition } from '../../../node_modules/@angular/core/src/view/util';

/*
  Generated class for the MoviesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoviesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MoviesProvider Provider');
  }

  getPopularMovies() {
    return new Promise((resolve, reject) => {
      this.http.get("https://api.themoviedb.org/3/movie/popular?api_key=f6b9adefc9f1e328fc5a66a32f4a3354")
        .subscribe(response => {
          var data = response as any;
          resolve(data.results);
        }, error => {
          reject(error);
        });
    })
  }

  geMovieDetails(id) {
    return new Promise((resolve, reject) => {
      this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=f6b9adefc9f1e328fc5a66a32f4a3354`)
        .subscribe(response => {
          var data = response as any;
          resolve(data);
        }, error => {
          reject(error);
        });
    })
  }

}
