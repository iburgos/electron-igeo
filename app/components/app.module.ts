import { MdCardModule } from '@angular2-material/card';
import { MdButtonModule } from '@angular2-material/button';
import { MdIconModule } from '@angular2-material/icon';
import { MdIconRegistry } from '@angular2-material/icon';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule,
        MdCardModule,
        MdButtonModule,
        MdIconModule],
    providers: [MdIconRegistry],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

