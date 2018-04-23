import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {DemoService} from './http.service';

import {HTTP_PROVIDERS,Http} from '@angular/http';


@Component({
  templateUrl: 'build/pages/http/http.html',
  providers: [DemoService, HTTP_PROVIDERS]
})

export class HTTP_Page {
  public sushi;
  public foods;
  public books;
  public movies;
  public UWDATA;
  public GeneralOneTwo;
  public GeneralThree;

  constructor(private _demoService: DemoService) { }

  ngOnInit() {
    this.getFoods();
    this.getBooksAndMovies();
  }

  getFoods() {
    this._demoService.getFoods().subscribe(
      // the first argument is a function which runs on success
      data => {
        this.foods = data,
        this.sushi = data[2].name
      },
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading foods')
    );
  }

  getBooksAndMovies() {
    this._demoService.getBooksAndMovies().subscribe(
      data => {
        this.books = data[0]
        this.movies = data[1]
      }
      // No error or completion callbacks here. They are optional, but
      // you will get console errors if the Observable is in an error state.
    );
  }
}