import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { STUDENTS } from '../data/students';
import { IStudent } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  getStudents():Observable<IStudent[]>{
    return of(STUDENTS);
  }
  getStudent(id:number):Observable<IStudent>{
    return of(STUDENTS.find(item => item.id ===id) as IStudent);
  }
}
