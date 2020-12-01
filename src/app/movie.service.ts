import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private userInput = new BehaviorSubject("");
  selectedMovie: any;
  details: any;
  movieCasts: any;
  movies: any;
  movieName: any;

  constructor(private http: HttpClient) { }

  changeInput(textValue: string) {
    this.userInput.next(textValue);
  }

  search() {
    this.getResults(this.movieName).subscribe((data) => {
      this.movies = data['results'];
      console.log(this.movies)
    })
  }

  getResults(movieName): Observable<any> {
    return this.http.get("https://api.themoviedb.org/3/search/movie?api_key=3abe594477a95672c6ba77afe6d23462&language=en-US&page=1&include_adult=false")
  }

  getPopularMovies(): Observable<any> {
    return this.http.get("https://api.themoviedb.org/3/movie/popular?api_key=3abe594477a95672c6ba77afe6d23462&language=en-US&page=1");
  }
  
  getComingSoon(): Observable<any> {
    return this.http.get(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=3abe594477a95672c6ba77afe6d23462&language=en-US&page=1");
  }
  
  getNowPlaying(): Observable<any> {
    return this.http.get("https://api.themoviedb.org/3/movie/now_playing?api_key=3abe594477a95672c6ba77afe6d23462&language=en-US&page=1");
  }
  
  getTrending(): Observable<any> {
    return this.http.get(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=3abe594477a95672c6ba77afe6d23462&language=en-US&page=1");
  }

  getMovieID(movie) {
    this.selectedMovie = movie;
  }

  getLatest(): Observable<any> {
    return this.http.get(
      "https://api.themoviedb.org/3/movie/latest?api_key=3abe594477a95672c6ba77afe6d23462&language=en-US")
  }
}

