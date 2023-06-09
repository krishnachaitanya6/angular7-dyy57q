import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.css']
})
export class FirstChildComponent implements OnInit {

  @Output() valueChange = new EventEmitter();
  inputVal: string;

  constructor() { }

  ngOnInit() {
  }

  onInputChange(){
    this.valueChange.emit(this.inputVal)
    this.inputVal = ''
  }

}