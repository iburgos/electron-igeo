/// <reference path="../../typings/globals/core-js/index.d.ts" />
/// <reference path="../../typings/globals/node/index.d.ts" />
import { bootstrap } from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';
import {NgFor} from '@angular/common';
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

bootstrap(App);