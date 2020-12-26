import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements AfterViewInit {
  message : string;
  @ViewChild(ChildComponent, {static: false}) child;

  constructor() { }

  ngAfterViewInit(): void {
    this.message = this.child.message;
  }

}
