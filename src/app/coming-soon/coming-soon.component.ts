import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-coming-soon',
  template: `
    <h1>Coming Soon<h1>
    <h5>A selection of movies coming to a theatre near you</h5>
    <div class="container">
      <mat-card *ngFor="let movie of movies" (click)="getMovieID(movie)">
        <img src="https://image.tmdb.org/t/p/w500{{movie.poster_path}}" alt="image">
        <p class="writing">{{movie.title}}</p>
        <p class="writing">{{movie.release_date}}</p>
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
    '.text { text-align: center; font-size: 18px; }',
    '.writing { font-size: 22px; }'
  ]
})
export class ComingSoonComponent implements OnInit {
  movies;

  constructor(private movieService: MovieService,
              private router: Router) { }

  ngOnInit(): void {
    this.movieService.getComingSoon().subscribe((data) => {
      this.movies = data['results'];
    })
  }

  getMovieID(movie) {
    this.movieService.getMovieID(movie);
    this.router.navigate(['/movie-details']);
  }

}
