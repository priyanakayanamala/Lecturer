import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { routing } from './app.route';

import { SubjectComponent } from './subject/subject.component';
import { HeaderComponent } from './header/header.component';
import { LecturerComponent } from './lecturer/lecturer.component';
import { TimetableComponent } from './timetable/timetable.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectComponent,
    HeaderComponent,
    LecturerComponent,
    TimetableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    routing
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
