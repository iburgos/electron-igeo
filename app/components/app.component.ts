import { Component } from '@angular/core';
import { OnInit } from "@angular/core";

@Component({
  selector: 'app',
  templateUrl: '../app/templates/app.component.html',
  styleUrls: ['../app/styles/app.component.scss']
})

export class AppComponent implements OnInit {

  constructor() { }
  public ngOnInit(): void { }
}
