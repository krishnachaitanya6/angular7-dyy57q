import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 7';
  messages = [];

  updateValueChange(val){
    console.log(val)
    this.messages.push(val)
  }
}
