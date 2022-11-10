import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-directive-ex',
  templateUrl: './for-directive-ex.component.html',
  styleUrls: ['./for-directive-ex.component.css']
})
export class ForDirectiveExComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public list = ["apple","ball","cat","dog","elephant","fish"];
}
