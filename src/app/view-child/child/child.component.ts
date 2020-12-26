import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  message : string;

  constructor() { }

  ngOnInit(): void {
    this.message = "Hello parent New message";
  }

}
