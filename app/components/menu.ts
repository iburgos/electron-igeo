import {bootstrap} from 'angular2/platform/browser';
import {Component, Pipe, PipeTransform} from 'angular2/core';
import {NgFor} from 'angular2/common';

@Component({
  selector: 'menu',
  templateUrl: './templates/menu.html',
  styleUrls:['./styles/menu.css']
})

export class Menu {

  constructor() {}
}
bootstrap(Menu)