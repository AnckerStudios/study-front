import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IGroup } from 'src/app/model/group';
import { Modal } from 'src/app/model/modal';
import { IStudent } from 'src/app/model/student';
import { GroupService } from 'src/app/services/group.service';
import { ModalDialogService } from 'src/app/services/modal-dialog.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-group-page',
  templateUrl: './group-page.component.html',
  styleUrls: ['./group-page.component.css']
})
export class GroupPageComponent {
  group?:IGroup;

  emptyStudent: IStudent = {
    id: NaN,
    name:'',
    birthdate: '',
    number: NaN,
    group: NaN
  }
  constructor(
    private route: ActivatedRoute,
    private groupService: GroupService,
    private md: ModalDialogService,
    private studentService: StudentService
  ){}
  ngOnInit(): void {
    this.getStudent();
  }
  
  getStudent(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.groupService.getGroup(id)
      .subscribe(group => this.group = group);
  }

  saveStudent(student: IStudent | undefined, index : number){
    this.emptyStudent.group = this.group?.id!;
    console.log("add student")
    this.md.openDialog<IStudent>(student || this.emptyStudent, Modal.saveStudent).subscribe((data)=>{
      console.log("data student",data)
      if(student){
        data.group === this.group!.id ?  this.group!.students[index] = data :  this.group!.students.splice(index,1)
       
      }else{
       this.group?.students.push(data);
      }
    });
  }

  deleteStudent(student: IStudent){
    this.studentService.deleteStudent(student.id).subscribe({
      next: (data) =>{
        console.log("delete ", data);
        if(this.group){
          this.group.students = this.group.students.filter((item) => item.id != student.id);
        }
      },
      error: (e) => {
        console.error("r err", e)
      }
    })
  }
}
