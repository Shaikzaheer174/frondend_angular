import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  public student:any = [];
  public errMsg:any = "";
  
  constructor(private _stdService: StudentServiceService) { }

  ngOnInit(): void { //it is called once when the component get initailized
    this._stdService.getstudents()
    .subscribe(data => this.student = data,
     error => this.errMsg = error  )  //one liner code from below method
  }

  //subscribe(data => this.student = data)  can be as function as
  //  subscribe(data){
  // student = data;
  //}
  

  

}
