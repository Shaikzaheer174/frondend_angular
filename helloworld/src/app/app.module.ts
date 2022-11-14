import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { TestComponent } from './test/test.component';
import { P1Component } from './p1/p1.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TemplatereferencevariablesComponent } from './templatereferencevariables/templatereferencevariables.component';
import { TwowaydatabindingComponent } from './twowaydatabinding/twowaydatabinding.component';
import { IfdirectiveEXComponent } from './ifdirective-ex/ifdirective-ex.component';
import { SwitchdirectiveEXComponent } from './switchdirective-ex/switchdirective-ex.component';
import { ForDirectiveExComponent } from './for-directive-ex/for-directive-ex.component';
import { ComponentInteractionChildToParentViceVersaComponent } from './component-interaction-child-to-parent-vice-versa/component-interaction-child-to-parent-vice-versa.component';
import { PipesComponent } from './pipes/pipes.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentServiceService } from './student-service.service';
import { HttpClientModule } from '@angular/common/http';
import { StudentsListComponent } from './students-list/students-list.component';
import { CoursesListComponent } from './courses-list/courses-list.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    TestComponent,
    P1Component,
    PropertybindingComponent,
    ClassbindingComponent,
    StylebindingComponent,
    EventbindingComponent,
    TemplatereferencevariablesComponent,
    TwowaydatabindingComponent,
    IfdirectiveEXComponent,
    SwitchdirectiveEXComponent,
    ForDirectiveExComponent,
    ComponentInteractionChildToParentViceVersaComponent,
    PipesComponent,
    StudentListComponent,
    StudentDetailsComponent,
    StudentsListComponent,
    CoursesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],

  //service class we provided
  providers: [StudentServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
