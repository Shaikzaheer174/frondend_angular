import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { studentInterface } from './student';

@Injectable({    // @Injectable decorator to let the components that this is a dependency    //this service has to provide data for students list nd details component
  providedIn: 'root'
})
export class StudentServiceService {

  constructor(private _http: HttpClient) { }
  
  private _url ="../assets/data/student.json";
   
  getstudents(): Observable<studentInterface[]>{ //get method accepts one parameter as a url i.e, the url of the server from where the data is coming.
    return this._http.get<studentInterface[]>(this._url);
  }
}