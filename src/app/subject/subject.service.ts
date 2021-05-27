import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {Subject} from './subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private apiserverUrl = environment.apiBaseurl;

  constructor(private http: HttpClient) { }

  public getSubject(): Observable<any>{
    return this.http.get<any>(`${this.apiserverUrl}/subject/all`);
  }
  public getLecturer(): Observable<any>{
    return this.http.get<any>(`${this.apiserverUrl}/lecturer/all`);
  }

  public addSubject(subject: Subject): Observable<Subject>{
    return this.http.post<Subject>(`${this.apiserverUrl}/subject/add`, subject);
  }

  public updateSubject(subject: Subject): Observable<Subject>{
    return this.http.put<Subject>(`${this.apiserverUrl}/subject/update`, subject);
  }

  public deleteSubject(subject: Subject): Observable<Subject>{
    return this.http.delete<Subject>(`${this.apiserverUrl}/subject/delete/{subjectId}`);
  }
}
