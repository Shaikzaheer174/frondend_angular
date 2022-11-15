import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-list',
  template: `
    <h2>
      courses-list component!
    </h2>
    <br/>
    <br/>

    <ul class="items">
      <li (click)="onSelect(x)" *ngFor="let x of course"> 
        <span>{{x.id}} </span>   {{x.name}}
      </li>
    </ul>

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

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  public course = [
    {"id": 1, "name": "angular"},
    {"id": 2, "name": "typescript"},
    {"id": 3, "name": "html"},  
    {"id": 4, "name": "css"},
    {"id": 5, "name": "java"},
    {"id": 6, "name": "spring-boot"}
  ];

  onSelect(x:any){
    this._router.navigate(['/course',x.id])   //it provides info to angular to construct url
  }



}
