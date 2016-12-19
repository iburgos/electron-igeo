import { bootstrap } from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';
import {Menu} from './menu';
import {ProjectList} from './projectList';

@Component({
  selector: 'app',
  templateUrl: '../templates/app.html',
  styleUrls:['../styles/app.css'],
  directives: [Menu, ProjectList],
})

export class App {

  constructor() {}
}

bootstrap(App, [Menu, ProjectList]);