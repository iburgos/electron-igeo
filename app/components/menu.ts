import {Component} from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: '../templates/menu.html',
  styleUrls:['../styles/menu.css']
})

export class Menu {
  // projectImgUrl = __dirname + 'images/project_128.png';
  projectImgUrl = 'file://' + __dirname + '/images/project_128.png';

  constructor() {
    console.log('file://' + __dirname + '/images/project_128.png');
  }
}
