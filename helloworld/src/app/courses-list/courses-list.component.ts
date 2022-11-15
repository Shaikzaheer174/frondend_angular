import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-courses-list',
  template: `
    <h2>
      courses-list component!
    </h2>
    <br/>
    <br/>

    <ul class="items">
      <li (click)="onSelect(x)" [class.selected]="isSelected(x)" *ngFor="let x of course"> 
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

  h1 {
    padding: 0;
    margin: 0;
    font-family: play;
    font-size: 50px;
    font-weight: bold;
    text-align: center;
    color: black;
}

/* Navigation link styles */
li {
    padding: 15px 20px;
    text-decoration: none;
    margin-top: 10px;
    display: inline-block;
    background-color: #eee;
    border-radius: 4px;
    margin-left: 20px;
}

nav a:visited,
li:link {
    color: #3643b6;
}

li:hover {
    color: #fff;
    background-color: #3643b6;
}

 li.active {
    color: #3643b6;
    background-color: #49ce0c;
}
li.selected{
  background-color: yellow;
}

  `
  ]
})
export class CoursesListComponent implements OnInit {

  public selectedId:any;

  constructor(private _router: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe((params: ParamMap) => {  //paramMap returns observable so to capture we need subscribe()
      let id = Number(params.get('id'));
      this.selectedId = id;
    })
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

  isSelected(x:any){
    return x.id === this.selectedId;

  }


}
