import { Component, OnInit } from '@angular/core';

export interface Timetable {
  AssignNo:number;
  subject: string;
  topic: string;
  status: boolean;
  select: null;

}

const ELEMENT_DATA: Timetable[] = [
  {AssignNo: 1,subject: "ES", topic: 'Write Short Note on IoT?', status: false, select: null},
  {AssignNo: 2,subject: "PIS", topic: 'Write Short Note on WebSecurity?', status: false, select: null},
  {AssignNo: 3,subject: "DMW", topic: 'Explain about Data Mining and diffent method for Data Mining?', status: false, select: null},
  {AssignNo: 4,subject: "PE", topic: 'Write Short Note on Ethics?', status: false, select: null},
  {AssignNo: 5,subject: "project", topic: 'Submit the final year project report', status: false, select: null},

];
@Component({
  selector: 'app-stdassignment',
  templateUrl: './stdassignment.component.html',
  styleUrls: ['./stdassignment.component.css']
})
export class StdassignmentComponent implements OnInit {
  displayedColumns: string[] = ['AssignNo','subject', 'topic', 'status', 'select'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
