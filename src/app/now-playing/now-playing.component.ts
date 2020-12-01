import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-now-playing',
  template: `
    <h1>Now Playing</h1>
    <h2>A selection of movies playing in a theatre near you.</h2>
    <div class="container">
      <mat-card *ngFor="let movie of movies" (click)="getMovieID(movie)">
        <img src="https://image.tmdb.org/t/p/w500{{movie.poster_path}}">
        <h3>{{movie.title}}</h3>
          <h3>{{movie.release_date}}</h3>
        <div class="overlay">
            <p class="text">{{movie.overview}}</p>
          </div>
      </mat-card>
    </div>
  `,
  styles: [
    'h1 { text-align: center; }',
    'h2 { text-align: center; }',
    '.container { text-align:center; display:grid; grid-template-columns: 1fr 1fr 1fr 1fr; grid-template-rows: 1fr; }',
    'img { width: 300px; margin: 0; padding: 0; }',
    '.text { text-align: center; font-size: 18px; }'
  ]
})
export class NowPlayingComponent implements OnInit {
  movies;

  constructor(private movieService: MovieService,
              private router: Router) { }

  ngOnInit() {
    this.movieService.getNowPlaying().subscribe((data => {
      this.movies = data['results']
    }))
  }

  getMovieID(movie) {
    this.movieService.getMovieID(movie);
    this.router.navigate(['/movie-details']);
  }

}
