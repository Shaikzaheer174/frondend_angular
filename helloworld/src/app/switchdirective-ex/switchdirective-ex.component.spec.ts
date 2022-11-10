import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchdirectiveEXComponent } from './switchdirective-ex.component';

describe('SwitchdirectiveEXComponent', () => {
  let component: SwitchdirectiveEXComponent;
  let fixture: ComponentFixture<SwitchdirectiveEXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchdirectiveEXComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchdirectiveEXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
