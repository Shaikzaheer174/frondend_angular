import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  public student:any = [];
  constructor(private _stdService: StudentServiceService) { }

  ngOnInit(): void { //it is called once when the component get initailized
    this.student = this._stdService.getstudents();
  }


  

}
