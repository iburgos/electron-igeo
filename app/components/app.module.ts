import { MdCardModule } from '@angular2-material/card';
import { MdMenuModule } from '@angular2-material/menu';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdSidenavModule } from '@angular2-material/sidenav';
import { MdButtonModule } from '@angular2-material/button';
import { MdIconModule, MdIconRegistry } from '@angular2-material/icon';
import { MdListModule } from '@angular2-material/list';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule,
        MdCardModule,
        MdButtonModule,
        MdIconModule,
        MdMenuModule,
        MdToolbarModule,
        MdSidenavModule,
        MdListModule],
    providers: [MdIconRegistry],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

