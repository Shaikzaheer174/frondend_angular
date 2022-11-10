import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentInteractionChildToParentViceVersaComponent } from './component-interaction-child-to-parent-vice-versa.component';

describe('ComponentInteractionChildToParentViceVersaComponent', () => {
  let component: ComponentInteractionChildToParentViceVersaComponent;
  let fixture: ComponentFixture<ComponentInteractionChildToParentViceVersaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentInteractionChildToParentViceVersaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentInteractionChildToParentViceVersaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
