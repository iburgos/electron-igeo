import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {Menu} from './menu';
import {ProjectList} from './projectList';

@Component({
  selector: 'app',
  templateUrl: './templates/app.html',
  styleUrls:['./styles/app.css'],
  directives: [Menu, ProjectList],
})

export class App {

  constructor() {}
}

bootstrap(App);