import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  constructor(private _stdService: StudentServiceService) { }

  public student: any = []

  ngOnInit(): void { //it is called once when the component get initailized
    this.student = this._stdService.getstudents();
  }
}
