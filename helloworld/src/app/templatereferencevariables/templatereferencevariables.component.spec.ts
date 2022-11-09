import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatereferencevariablesComponent } from './templatereferencevariables.component';

describe('TemplatereferencevariablesComponent', () => {
  let component: TemplatereferencevariablesComponent;
  let fixture: ComponentFixture<TemplatereferencevariablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplatereferencevariablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplatereferencevariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
