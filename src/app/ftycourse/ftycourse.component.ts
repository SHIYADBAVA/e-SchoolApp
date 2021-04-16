import { Component, OnInit } from '@angular/core';

export interface Timetable {
  day:string;
  period1: string;
  period2: string;
  period3: string;
  period4: string;
}

const ELEMENT_DATA: Timetable[] = [
  {day: "Monday", period1: 'ES', period2: 'PIS', period3: 'PE', period4:"DMW"},
  {day: "Tuesday", period1: 'DMW', period2: 'ES', period3: 'PIS', period4:"PE"},
  {day: "Wednesday", period1: 'PE', period2: 'DMW', period3: 'ES', period4:"PIS"},
  {day: "Thursday", period1: 'PIS', period2: 'PE', period3: 'DMW', period4:"ES"},
  {day: "Friday", period1: 'project', period2: 'project', period3: 'project', period4:"project"},
];
@Component({
  selector: 'app-ftycourse',
  templateUrl: './ftycourse.component.html',
  styleUrls: ['./ftycourse.component.css']
})
export class FtycourseComponent implements OnInit {
  displayedColumns: string[] = ['day','period1', 'period2', 'period3', 'period4'];
  dataSource = ELEMENT_DATA;
  title="S8CS2"
  constructor() { }

  ngOnInit(): void {
  }

}
