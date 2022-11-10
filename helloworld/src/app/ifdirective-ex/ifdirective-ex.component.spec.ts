import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfdirectiveEXComponent } from './ifdirective-ex.component';

describe('IfdirectiveEXComponent', () => {
  let component: IfdirectiveEXComponent;
  let fixture: ComponentFixture<IfdirectiveEXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IfdirectiveEXComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IfdirectiveEXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
