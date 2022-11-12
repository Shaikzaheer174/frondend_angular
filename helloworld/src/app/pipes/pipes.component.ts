import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public name ="zaheer";

  public mesg =" this is pipes example";

  public personname = {
    "name": "zaheer",
    "website": "codewithzaheer"
  }

  public date = new Date();
}
