import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  templateUrl: './stylebinding.component.html',
  styleUrls: ['./stylebinding.component.css']
})
export class StylebindingComponent implements OnInit {
  public myColour="red";
  public required = true;
  public multiplecolours ={
    "color":"gold",
    "fontStyle":"italic",
    "fontSize":"bold"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
