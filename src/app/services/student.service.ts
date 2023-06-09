import { Injectable } from '@angular/core';
import { Observable, delay, map, of, throwError } from 'rxjs';
import { STUDENTS } from '../data/students';
import { IStudent } from '../model/student';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  url = `${environment.apiUrl}/students`
  constructor(private http: HttpClient) { }

  getStudents():Observable<IStudent[]>{
    return this.http.get<IStudent[]>(this.url).pipe(delay(500));
    // of(STUDENTS).pipe(delay(1000));
  }
  getStudent(id:number):Observable<IStudent>{
    return this.http.get<IStudent>(`${this.url}/findById`,{params: new HttpParams().set('id', id)}).pipe(delay(500));
    // of(STUDENTS.find(item => item.id ===id) as IStudent).pipe(delay(1000));
  }
  saveStudent(student: IStudent):Observable<IStudent>{
    return this.http.post<IStudent>(this.url, student).pipe();
    // of(student).pipe(delay(1000));
  }
  deleteStudent(id: number){
    return this.http.delete<IStudent>(this.url,{params: new HttpParams().set('id', id)});
  }
}
