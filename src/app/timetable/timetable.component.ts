import { Component, OnInit } from '@angular/core';
import { TimetableService } from './timetable.service';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent implements OnInit {
  ItemsArray: any = [];

  constructor(private timetableservice: TimetableService) { }

  ngOnInit() {
    this.timetableservice.getData().subscribe((res: any[])=>{
      this.ItemsArray = res;
    })  
  }


}
