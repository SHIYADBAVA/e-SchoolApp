import { isNgTemplate } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TimetableModel } from '../ftyaddtt/timetable.model';
import { FtynewttService } from '../ftynewtt.service';

@Component({
  selector: 'app-ftyaddtt',
  templateUrl: './ftyaddtt.component.html',
  styleUrls: ['./ftyaddtt.component.css']
})
export class FtyaddttComponent implements OnInit {

  constructor(private ftynewttService:FtynewttService, private _router:Router) { }


  ngOnInit(): void {
  }
  timetableItem = new TimetableModel(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null);
  AddTimetable()
  {
    this.ftynewttService.newTimetable(this.timetableItem);
    console.log("Called");
    alert("Are you sure want to add this timetable?");
    this._router.navigate(['/faculty/timetable/']);
  }
}
