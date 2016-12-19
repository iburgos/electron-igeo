import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component } from '@angular/core';
import { Menu } from './menu';
import { ProjectList } from './projectList';

@Component({
  selector: 'app',
  templateUrl: '../app/templates/app.html',
  styleUrls: ['../app/styles/app.css'],
  directives: [Menu, ProjectList],
})

export class App {

  constructor() { }
}

bootstrap(App, [Menu, ProjectList]);