import { Component, OnInit } from '@angular/core';
import { FacultylistService } from '../facultylist.service';
import { FacultyModel } from './admfaculty.model';

@Component({
  selector: 'app-admfaculty',
  templateUrl: './admfaculty.component.html',
  styleUrls: ['./admfaculty.component.css']
})
export class AdmfacultyComponent implements OnInit {

  facultys: FacultyModel[] | undefined;
  constructor(private ftylistService: FacultylistService) {  }

  ngOnInit(): void {
    this.ftylistService.getFaculty().subscribe((data:any)=>{
    this.facultys=JSON.parse(JSON.stringify(data))
    })
}
}
