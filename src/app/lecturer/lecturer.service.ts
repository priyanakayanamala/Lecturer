import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {Lecturer} from './lecturer'

@Injectable({
  providedIn: 'root'
})
export class LecturerService {
  private apiserverUrl = environment.apiBaseurl;

  constructor(private http: HttpClient) { }

  public getLecturer(): Observable<any>{
    return this.http.get<any>(`${this.apiserverUrl}/lecturer/all`);
  }

  public addLecturer(lecturer: Lecturer): Observable<Lecturer>{
    return this.http.post<Lecturer>(`${this.apiserverUrl}/lecturer/add`, lecturer);
  }

  public updateLecturer(lecturer: Lecturer): Observable<Lecturer>{
    return this.http.put<Lecturer>(`${this.apiserverUrl}/lecturer/update`, lecturer);
  }

  public deleteLecturer(lecturer: Lecturer): Observable<Lecturer>{
    return this.http.delete<Lecturer>(`${this.apiserverUrl}/lecturer/delete/{lecturerId}`);
  }
}
