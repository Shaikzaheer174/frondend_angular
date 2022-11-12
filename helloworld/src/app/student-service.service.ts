import { Injectable } from '@angular/core';

@Injectable({    // @Injectable decorator to let the components that this is a dependency    //this service has to provide data for students list nd details component
  providedIn: 'root'
})
export class StudentServiceService {
  getstudents(){
    return [
      {
        "id": 1, "name": "zaheer", "course": "angular"
      },

      {
        "id": 2, "name": "guddu", "course": "java"
      }
    ];
  }

  constructor() { }
}
