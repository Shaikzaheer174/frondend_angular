import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-list',
  template: `
    <h2>
      courses-list component!
    </h2>
  `,
  styles: [`
  h2{
    color: blue;
    text-align: center;
    font-family: cursive;
    font-weight: bold;
    font-size: 30px;
  }

  `
  ]
})
export class CoursesListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
