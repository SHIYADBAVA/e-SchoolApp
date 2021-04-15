import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacultylistService } from '../facultylist.service';
import { FacultyModel } from '../admfaculty/admfaculty.model';

@Component({
  selector: 'app-admaddfty',
  templateUrl: './admaddfty.component.html',
  styleUrls: ['./admaddfty.component.css']
})
export class AdmaddftyComponent implements OnInit {

  constructor(private _router:Router,private ftylistService:FacultylistService) { }
// New Faculty Object
faculty={
  name:"",
  username:"",
  email:"",
  password:""
}

facultyItem = new FacultyModel( this.faculty.name, this.faculty.username, this.faculty.email, this.faculty.password);

  ngOnInit(): void {
  }
  // New Faculty Adding Function
  addFaculty()
  {
    this.ftylistService.newAddFaculty(this.facultyItem);
    console.log("called");
    alert("Are you Sure want to add this Faculty details?");
    this._router.navigate(["/admin/faculty"]);
  }

}
