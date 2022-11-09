import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatereferencevariables',
  templateUrl: './templatereferencevariables.component.html',
  styleUrls: ['./templatereferencevariables.component.css']
})
export class TemplatereferencevariablesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 public mymessage: string = "";
  message(name:any){
    this.mymessage = name;
  }

}
