import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FirstChildComponent } from './first-child/first-child.component'
import { SecondChildComponent } from './second-child/second-child.component'


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, 
    FirstChildComponent,
    SecondChildComponent
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
