import { formatDate } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { IGroup } from 'src/app/model/group';
import { ModalComponent } from 'src/app/model/modalComponent';
import { IStudent } from 'src/app/model/student';
import { GroupService } from 'src/app/services/group.service';
import { ModalDialogService } from 'src/app/services/modal-dialog.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-save-student',
  templateUrl: './save-student.component.html',
  styleUrls: ['./save-student.component.css']
})
export class SaveStudentComponent implements ModalComponent{

  @Output() response = new EventEmitter<IStudent>();
  groups?: IGroup[];
  dateStringControl = new FormControl('2020-09-28');
  dateObjectControl = new FormControl(new Date());
  constructor(
    private fb: FormBuilder,
    public md: ModalDialogService,
    private studentService: StudentService,
    private groupService: GroupService,
  ) { }
  ngOnInit() {
    console.log("dsds", this.md.getInput());
    let student = this.md.getInput<IStudent>();
    student && this.form.setValue({
      id: student.id,
      name: student.name,
      birthdate: student.birthdate ,
      number: student.number,
      group: student.group

    })
    this.getGroups();
    // this.md.inputData
  }
  form = this.fb.group({
    id: [NaN],
    name: ['', [Validators.required]],
    birthdate: ['', [Validators.required]],
    number: [NaN, [Validators.required]],
    group: [NaN, [Validators.required]]

  })
  getGroups() {
    this.groupService.getGroups().subscribe(item => this.groups = item);
  }
  confirm() {
    this.studentService.saveStudent(this.form.getRawValue() as IStudent).subscribe({
      next: (data) => {
        this.response.emit(data);
      },
      error: (e) => console.error("r err", e)
    })
  }
}
