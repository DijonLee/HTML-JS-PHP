import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class DemoService {

  constructor(private http:Http) { }

  // Uses http.get() to load a single JSON file
  getFoods() {
    return this.http.get('build/pages/http/food.json').map((res:Response) => res.json());
  }

  // Uses Observable.forkJoin() to run multiple concurrent http.get() requests.
  // The entire operation will result in an error state if any single request fails.
  getBooksAndMovies() {
    return Observable.forkJoin(
      this.http.get('build/pages/http/books.json').map((res:Response) => res.json()),
      this.http.get('build/pages/http/movies.json').map((res:Response) => res.json())
    );
  }

  getSectionOneData() {
    return Observable.forkJoin(
      this.http.get('build/data/section-one/underwriter.json').map((res:Response) => res.json()), // 0
      this.http.get('build/data/section-one/generalOneTwo.json').map((res:Response) => res.json()), // 1
      this.http.get('build/data/section-one/generalThreee.json').map((res:Response) => res.json()) // 2
    );
  }

}
