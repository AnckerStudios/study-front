import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GROUPS } from 'src/app/data/groups';
import { STUDENTS } from 'src/app/data/students';
import { IGroup } from 'src/app/model/group';
import { ModalComponent } from 'src/app/model/modalComponent';
import { IStudent } from 'src/app/model/student';
import { GroupService } from 'src/app/services/group.service';
import { ModalDialogService } from 'src/app/services/modal-dialog.service';


@Component({
  selector: 'app-save-group',
  templateUrl: './save-group.component.html',
  styleUrls: ['./save-group.component.css']
})
export class SaveGroupComponent implements ModalComponent{
  // @Input() data: string = "fff";
  @Output() response = new EventEmitter<IGroup>();
  constructor(private fb: FormBuilder,public md: ModalDialogService, private groupService: GroupService) { }
  ngOnInit(){
    console.log("dsds", this.md.getInput());
    let group = this.md.getInput<IGroup>();
    group && this.form.setValue({
      id: group.id,
      name: group.name,
      students: []
    })
    // this.md.inputData
  }
  form = this.fb.group({
    id: [NaN],
    name: ['', [Validators.required]],
    students: this.fb.array<IStudent>([],[Validators.required])
  })

  confirm() {
    this.form.status == "VALID" && this.groupService.saveGroup(this.form.getRawValue() as IGroup).subscribe({
      next: (data) => {
        this.response.emit(data);
      },
      error: (e) => console.error("r err",e)
  })
  }


}
