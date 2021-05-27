import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

import { Lecturer } from './lecturer';
import { LecturerService } from './lecturer.service';

@Component({
  selector: 'app-lecturer',
  templateUrl: './lecturer.component.html',
  styleUrls: ['./lecturer.component.css']
})
export class LecturerComponent implements OnInit {
   public lecturer: any;
    public editLecturer: any;
    public deleteLecturer: any;

    constructor(private lecturerservice: LecturerService) { }

    ngOnInit(){
      this.getLecturer();
    }


    public getLecturer(): void{
      this.lecturerservice.getLecturer().subscribe(
        (response: Lecturer[]) => {
          this.lecturer = response;
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }
  
  
    public OnAddLecturer(addForm: NgForm): void {
      this.lecturerservice.addLecturer(addForm.value).subscribe(
        (response: Lecturer) => {
          console.log(response);
          this.getLecturer();
          addForm.reset();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
          addForm.reset();
        }
      );
    }
  
    public onUpdateLecturer(lecturer: Lecturer): void {
      this.lecturerservice.updateLecturer(lecturer).subscribe(
        (response: Lecturer) => {
          console.log(response);
          this.getLecturer();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }
  
    public onDeleteLecturer(lecturerId: number): void {
      this.lecturerservice.deleteLecturer(this.lecturer).subscribe(
        (response: any) => {
          console.log(response);
          this.getLecturer();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }
  
  
    public onOpenModal(lecturer: Lecturer, mode: string): void {
      const container = document.getElementById('main-container');
      const button = document.createElement('button');
      button.type = 'button';
      button.style.display = 'none';
      button.setAttribute('data-toggle', 'modal');
      if (mode === 'add') {
        button.setAttribute('data-target', '#addLecturerModal');
      }
      if (mode === 'edit') {
        this.editLecturer = lecturer;
        button.setAttribute('data-target', '#updateLecturerModal');
      }
      if (mode === 'delete') {
        this.deleteLecturer = lecturer;
        button.setAttribute('data-target', '#deleteLecturerModal');
      }
      container?.appendChild(button);
      button.click();
    }
  
  }

