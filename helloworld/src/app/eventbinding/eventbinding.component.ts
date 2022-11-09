import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {
  public greeting: string = "";
  onClick(){
    console.log("onClick");
    this.greeting ="helloworld";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
