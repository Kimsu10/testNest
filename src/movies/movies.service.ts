import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    console.log(this.movies);
    return this.movies;
  }
  getOne(id: string): Movie {
    return this.movies.find((movie) => movie.id === parseInt(id));
    //parseInt 대신 +id로 바꿔도 string을 number로 바꿔주기때문에 가능하다.
  }
  deleteOne(id: string): boolean {
    this.movies.filter((movie) => movie.id !== parseInt(id));
    return true;
  }
  create(movieData) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }
}
