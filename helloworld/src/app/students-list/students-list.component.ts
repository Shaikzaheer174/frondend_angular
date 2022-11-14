import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students-list',
  template: `
    <h2>
      students-list component!
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
export class StudentsListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
