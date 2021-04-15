import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FacultylistService {

  constructor(private http:HttpClient) { }
  // Get Faculty From DB
  getFaculty()
  {
   return this.http.get('http://localhost:3000/admin/faculty');
  }
  // Create New Faculty  Details to DB
  newAddFaculty(item:any)
  {
    return this.http.post("http://localhost:3000/admin/addfaculty/",{"faculty":item})
    .subscribe(data=>{console.log(data)})
  }
}
