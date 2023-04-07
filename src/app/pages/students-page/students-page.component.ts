import { Component } from '@angular/core';
import { IStudent } from 'src/app/model/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.css']
})
export class StudentsPageComponent {
  students?:IStudent[];
  constructor(private studentService: StudentService){}

  ngOnInit(){
    this.getStudents();
  }
  getStudents(){
    this.studentService.getStudents().subscribe(item=>this.students = item);
  }
}
