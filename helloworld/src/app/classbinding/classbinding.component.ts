import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classbinding',
  template: 
  `
    <p>classbinding works!</p>

    <h2 class="TextColor">Classbinding</h2> <!-- normal css class binding -->

    <h2 [class]="myText">Classbinding</h2>
    <h2 [class]="myText2">Classbinding</h2>
    <h2 [class]="myText3">Classbinding</h2>
    <h2 [class.TextSize]="required">condition</h2>
    <!-- for multiple class binding need to use ngclass-->
    <h2 [ngClass]="group">multi class binding based condition</h2>
     

  `,
  styles: [

    `
    h2{
      text-align:center;
      font-size:30px;
    }

    /*
     writing class in css.
    */

     .TextColor{
      color: green;
     }

     .TextSize{
      font-size: 100px;
     }

     .TextStyle{ 
      font-style: italic;
     }

    `
  ]
})
export class ClassbindingComponent implements OnInit {

  public myText  = "TextColor";
  public myText2 = "TextSize";
  public myText3 = "TextStyle";
  public required = true;

  public group = {
    "TextColor" : this.required,
    "TextSize" : this.required,
    "TextStyle" : this.required

  }

  constructor() { }

  ngOnInit(): void {
  }

}
