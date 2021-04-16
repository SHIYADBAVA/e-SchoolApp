import { Component, OnInit } from '@angular/core';

export interface Timetable {
  subject: string;
  attendance: number;

}

const ELEMENT_DATA: Timetable[] = [
  {subject: "ES", attendance: 100},
  {subject: "PIS", attendance: 93},
  {subject: "DMW", attendance: 85},
  {subject: "PE", attendance: 90},
  {subject: "project", attendance: 100},

];
@Component({
  selector: 'app-stdattendance',
  templateUrl: './stdattendance.component.html',
  styleUrls: ['./stdattendance.component.css']
})
export class StdattendanceComponent implements OnInit {
  displayedColumns: string[] = ['subject', 'attendance'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
