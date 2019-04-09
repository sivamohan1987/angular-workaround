import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'Guest';
  childComponentTitle: string;
  appTitle: FormControl = new FormControl('Default');
  
  @ViewChild(ChildComponent) childComponent: ChildComponent;
  @ViewChild('viewChildEx') viewChildContainer: ElementRef;
  getChildCmpTitle() {
    alert("Child component title : " + this.childComponent.cmpTitle);
    console.log(this.viewChildContainer.nativeElement);
  }
}
