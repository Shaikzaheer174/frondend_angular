import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { studentInterface } from './student';
import { catchError } from 'rxjs/operators';

@Injectable({    // @Injectable decorator to let the components that this is a dependency    //this service has to provide data for students list nd details component
  providedIn: 'root'
})
export class StudentServiceService {

  constructor(private _http: HttpClient) { }
  
  private _url ="../assets/data/student.json";
   
  getstudents(): Observable<studentInterface[]>{ //get method accepts one parameter as a url i.e, the url of the server from where the data is coming.
    return this._http.get<studentInterface[]>(this._url)
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error : HttpErrorResponse){
    return throwError(error.message || "unknown server error"); //if the error mesg having null then  custom error mesg
  }
}