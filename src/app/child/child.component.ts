import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  cmpTitle: any;
  @Input() parentCmpName: string;
  @Input('title')
  set title(v: string) {
    this.cmpTitle =  "Prefixed " + v;
  }
  get title() {
    return this.cmpTitle;
  }
  @Output() componentTitle = new EventEmitter(); 
  constructor() {
    console.log('parent component name: ', this.parentCmpName)
  }

  ngOnInit() {
  }

  emitToParent() {
    this.componentTitle.emit(this.title);
  }
}
