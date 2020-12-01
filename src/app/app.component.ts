import { Component, OnInit } from '@angular/core';
import { MovieService } from './movie.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FindAFlick';
  movies;

  constructor(private movieService: MovieService,
              private router: Router) { }

  ngOnInit() {
    this.movieService.getLatest().subscribe((data => {
      this.movies = data['results'];
    }))
  }

  getMovieID(movie) {
    this.movieService.getMovieID(movie);
    this.router.navigate(['/movie-details'])
  }
}
