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

  public greetings ="";
  onclick(name:any){
    this.greetings = "hello "+name;
  }

}
