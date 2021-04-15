import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdmstudentService } from '../admstudent.service';
import { StudentModel } from '../admaddstd/admaddstudent.model';

@Component({
  selector: 'app-admaddstd',
  templateUrl: './admaddstd.component.html',
  styleUrls: ['./admaddstd.component.css']
})
export class AdmaddstdComponent implements OnInit {

  constructor(private _router:Router, private admStudentService:AdmstudentService) { }
  // New Student Object
  student={
    name:"",
    classname:"",
    username:"",
    email:"",
    regno:"",
    password:""
  }

  studentItem=new StudentModel( this.student.name, this.student.classname, this.student.username, this.student.email, this.student.regno, this.student.password);
  ngOnInit(): void {
  }
  // New Student Adding Function
  addStudent()
  {
    this.admStudentService.newAddStudent(this.studentItem);
    console.log("Called");
    alert("Are You Sure Want to Add This Student Details");
    this._router.navigate(['/admin/student']);

  }
}
