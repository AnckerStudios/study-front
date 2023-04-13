import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { STUDENTS } from '../data/students';
import { IStudent } from '../model/student';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  url = "http://localhost:8080/api/students"
  constructor(private http: HttpClient) { }

  getStudents():Observable<IStudent[]>{
    return this.http.get<IStudent[]>(this.url);
    // of(STUDENTS).pipe(delay(1000));
  }
  getStudent(id:number):Observable<IStudent>{
    return this.http.get<IStudent>(`${this.url}/findById`,{params: new HttpParams().set('id', id)});
    // of(STUDENTS.find(item => item.id ===id) as IStudent).pipe(delay(1000));
  }
  saveStudent(student: IStudent):Observable<IStudent>{
    return this.http.post<IStudent>(this.url, student);
    // of(student).pipe(delay(1000));
  }
  deleteStudent(id: number){
    return this.http.delete<IStudent>(this.url,{params: new HttpParams().set('id', id)});
  }
}
