import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdmstudentService {

  constructor(private http:HttpClient) { }
  // Get Student Details from DB
  getStudents()
  {
    return this.http.get("http://localhost:3000/admin/student/");
  }
  // Creating New Student Details
  newAddStudent(item: any)
  {
    return this.http.post("http://localhost:3000/admin/addstudent/",{'student':item})
    .subscribe(data=>{console.log(data)})
  }
  // Delete Student Function
  // delete(id:any)
  // {
  //   return this.http.delete("http://localhost:3000/admin/student/:id");
  // }
}
