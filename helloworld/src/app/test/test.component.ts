import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <p>
      test works!
    </p>
    <h1>welcome to interpolation</h1>
    <p>my website {{name}}</p>
    <!-- 
    <p>{{"my website name is: "+name}}</p>
    <p>{{"length is: "+name.length}}</p>
    <p>{{name.toUpperCase()}}</p>

    <p>{{userName()}}</p>
    -->

  `,
  styles: [
    `
    p{
      text-align: center;
      color: blue;
    }
    `
  ]
})
export class TestComponent implements OnInit {
  public name: string = 'code with zaheer';

  constructor() { }

  ngOnInit(): void {
  }

  userName(){
    return "welcome to "+this.name;
  }
}
