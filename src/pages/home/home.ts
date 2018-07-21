import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MoviesProvider } from '../../providers/movies/movies';
import { MovieDetailsPage } from '../movie-details/movie-details';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    Camera
  ]
})
export class HomePage {
  movies:any = [];
  image = '';
  constructor(
    public navCtrl: NavController,
    private moviesProvider: MoviesProvider,
    private camera: Camera
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

  takePicture(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
     this.image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {

    });
  }

}
