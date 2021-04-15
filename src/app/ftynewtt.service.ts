import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class FtynewttService {

  constructor(private http:HttpClient) { }

  newTimetable(item:any)
  {
    return this.http.post("http://localhost:3000/faculty/addtimetable/",{'timetable':item})
    .subscribe(data=>{console.log(data)})
  }
}
