import { Component } from '@angular/core';
import { OnInit } from "@angular/core";

@Component({
  selector: 'app',
  template: '<h2>Hello Angular</h2>' 
  //styleUrls: ['../app/styles/app.css']
})

export class AppComponent implements OnInit{

  constructor() { }
  public ngOnInit(): void{}
}
