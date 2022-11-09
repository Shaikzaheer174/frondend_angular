import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-p1',
  templateUrl: './p1.component.html',
  styleUrls: ['./p1.component.css']
})
export class P1Component implements OnInit {

  name: string = "this is interpolation demo";
  url = window.location.href;

  public myname():any { 
    return this.name;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
