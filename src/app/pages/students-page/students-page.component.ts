import { Component } from '@angular/core';
import { SaveStudentComponent } from 'src/app/components/modal-dialog/save-student/save-student.component';
import { Modal } from 'src/app/model/modal';
import { IStudent } from 'src/app/model/student';
import { ModalDialogService } from 'src/app/services/modal-dialog.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.css']
})
export class StudentsPageComponent {
  students?:IStudent[];
  constructor(
    private md: ModalDialogService,
    private studentService: StudentService
    ){}

  ngOnInit(){
    this.getStudents();
  }
  getStudents(){
    this.studentService.getStudents().subscribe(item=>this.students = item);
  }
  saveStudent(){
    console.log("add student")
    this.md.openDialog<IStudent>(undefined, SaveStudentComponent).subscribe((data)=>{
      console.log("data student",data)
      this.students?.push(data);

    });
  }

  deleteStudent(student: IStudent){
    this.studentService.deleteStudent(student.id).subscribe({
      next: (data) =>{
        console.log("delete ", data);
        if(this.students){
          this.students = this.students.filter((item) => item.id != student.id);
        }
      },
      error: (e) => {
        console.error("r err", e)
      }
    })
  }
}
