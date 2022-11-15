import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  public courseId:any;

  constructor(private _activatedRoute: ActivatedRoute, private _route: Router) { }

  ngOnInit() {
  //  let cId = this._activatedRoute.snapshot.paramMap.get('id');

   this._activatedRoute.paramMap.subscribe((params: ParamMap) => {  //paramMap returns observable so to capture we need subscribe()
    let id = Number(params.get('id'));
    this.courseId = id;
   })
   
  }

  toPrevious(){
    let previousId = this.courseId - 1;
    this._route.navigate(['/course/', previousId]);


  }

  toNext(){
    let nextId = this.courseId + 1;
    this._route.navigate(['/course', nextId]);
  }


}
