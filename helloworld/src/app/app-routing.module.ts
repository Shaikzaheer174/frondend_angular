import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentsListComponent } from './students-list/students-list.component';

//Every route we will take it as a object. and it have path and componentname
const routes: Routes = [
  //if it is empty then it redirects to the default route i.e., home component.
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  
  { path:'student', component: StudentsListComponent },
  { path:'course', component: CoursesListComponent },
  {path: 'home', component: HomeComponent},

  //wild card route always at bottom
  { path: "**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// here we can declare components related to routes and we can add in app.module files declarations sections to keep the routes better way.
// export const myroutes = [CoursesListComponent , StudentsListComponent];
