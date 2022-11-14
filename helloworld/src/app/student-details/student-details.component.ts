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
  public errMsg = "";


  ngOnInit(): void { //it is called once when the component get initailized
    this._stdService.getstudents()
      .subscribe(data => this.student = data,
        error => this.errMsg = error)  //one liner code from below method
  }
}
