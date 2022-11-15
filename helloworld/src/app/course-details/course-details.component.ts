import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  public courseId:any;

  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
   let cId = this._activatedRoute.snapshot.paramMap.get('id');
   this.courseId = cId;
  }

}
