import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-component-interaction-child-to-parent-vice-versa',
  templateUrl: './component-interaction-child-to-parent-vice-versa.component.html',
  styleUrls: ['./component-interaction-child-to-parent-vice-versa.component.css']
})
export class ComponentInteractionChildToParentViceVersaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() receiver:any


  
  @Output() public childInfo = new EventEmitter();


}
