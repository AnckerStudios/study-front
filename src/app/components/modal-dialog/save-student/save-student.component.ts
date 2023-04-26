import { formatDate } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
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
export class SaveStudentComponent implements ModalComponent {
  status?: string;
  mes?= '';
  @Output() response = new EventEmitter<IStudent>();
  groups?: IGroup[];
  private readonly destroy$ = new Subject<void>();
  constructor(
    private fb: FormBuilder,
    public md: ModalDialogService,
    private studentService: StudentService,
    private groupService: GroupService,
  ) { }
  ngOnInit() {
    let student = this.md.getInput<IStudent>();
    student && this.form.setValue({
      id: student.id,
      name: student.name,
      birthdate: student.birthdate && formatDate(student.birthdate, 'yyyy-MM-dd', 'en'),
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
    this.groupService.getGroups()
      .pipe(takeUntil(this.destroy$))
      .subscribe(item => this.groups = item);
  }
  confirm() {
    if (!this.form.valid) {
      this.mes = 'Заполни все поля'
      return;
    }

    this.status = 'loading'
    this.studentService.saveStudent(this.form.getRawValue() as IStudent)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data) => {
          this.response.emit(data);
        },
        error: (e) => {
          console.error("r err", e);
          this.status = 'error'
        }
      })

  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
