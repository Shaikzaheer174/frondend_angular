import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForDirectiveExComponent } from './for-directive-ex.component';

describe('ForDirectiveExComponent', () => {
  let component: ForDirectiveExComponent;
  let fixture: ComponentFixture<ForDirectiveExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForDirectiveExComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForDirectiveExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
