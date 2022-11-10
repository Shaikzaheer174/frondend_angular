import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ifdirective-ex',
  templateUrl: './ifdirective-ex.component.html',
  styleUrls: ['./ifdirective-ex.component.css']
})
export class IfdirectiveEXComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public name: string =" codewithzaheer";
  public status = true;
}
