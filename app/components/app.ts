import {bootstrap} from 'angular2/platform/browser';
import {Component, Pipe, PipeTransform} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {Menu} from '../components/menu';


@Pipe({ name: 'byteFormat'})
class ByteFormatPipe implements PipeTransform {
  transform(bytes, args) {
    if(bytes == 0) return '0 Bytes';
    var k = 1000;
    var sizes = ['Bytes', 'KB', 'MB', 'GB'];
    var i = Math.floor(Math.log(bytes) / Math.log(k));
    return (bytes / Math.pow(k, i)).toFixed(1) + ' ' + sizes[i];
  }
}

@Component({
  selector: 'app',
  pipes: [ByteFormatPipe],
  templateUrl: './templates/app.html',
  styleUrls:['./styles/app.css'],
  directives: [Menu],
})

export class App {

  constructor() {}
}

bootstrap(App);