import { Routes, RouterModule } from '@angular/router';
import { SubjectComponent } from './subject/subject.component';
import { HeaderComponent } from './header/header.component';
import { LecturerComponent } from './lecturer/lecturer.component';
import { TimetableComponent } from './timetable/timetable.component';


const appRoutes: Routes = [
    { path: 'subject', component: SubjectComponent },
    {path: 'header', component: HeaderComponent},
    {path: 'lecturer', component: LecturerComponent},
    {path: 'timetable', component: TimetableComponent}
];

export const routing = RouterModule.forRoot(appRoutes);