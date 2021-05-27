import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

import { Subject } from './subject';
import { SubjectService } from './subject.service';
import { Lecturer } from './subject';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  public subject: any;
    public editSubject: any;
    public deleteSubject: any;
    public lecturer: any;

    constructor(private subjectservice: SubjectService) { }

    ngOnInit(){
      this.getSubject();
      this.getLecturer();
    }

    public getLecturer(): void{
      this.subjectservice.getLecturer().subscribe(
        (response: Lecturer[]) => {
          this.lecturer = response;
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }



    public getSubject(): void{
      this.subjectservice.getSubject().subscribe(
        (response: Subject[]) => {
          this.subject = response;
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }
  
  
    public OnAddSubject(addForm: NgForm): void {
      this.subjectservice.addSubject(addForm.value).subscribe(
        (response: Subject) => {
          console.log(response);
          this.getSubject();
          addForm.reset();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
          addForm.reset();
        }
      );
    }
  
    public onUpdateSubject(subject: Subject): void {
      this.subjectservice.updateSubject(subject).subscribe(
        (response: Subject) => {
          console.log(response);
          this.getSubject();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }
  
    public onDeleteSubject(subjectId: number): void {
      this.subjectservice.deleteSubject(this.subject).subscribe(
        (response: any) => {
          console.log(response);
          this.getSubject();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }
  
  
    public onOpenModal(subject: Subject, mode: string): void {
      const container = document.getElementById('main-container');
      const button = document.createElement('button');
      button.type = 'button';
      button.style.display = 'none';
      button.setAttribute('data-toggle', 'modal');
      if (mode === 'add') {
        button.setAttribute('data-target', '#addSubjectModal');
      }
      if (mode === 'edit') {
        this.editSubject = subject;
        button.setAttribute('data-target', '#updateSubjectModal');
      }
      if (mode === 'delete') {
        this.deleteSubject = subject;
        button.setAttribute('data-target', '#deleteSubjectModal');
      }
      container?.appendChild(button);
      button.click();
    }
  
  }
