import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IStudent } from 'src/app/model/student';
import { GroupService } from 'src/app/services/group.service';
import { ModalDialogService } from 'src/app/services/modal-dialog.service';
import { StudentService } from 'src/app/services/student.service';
import { SaveStudentComponent } from '../modal-dialog/save-student/save-student.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  emoji?: string;
  @Input()student?: IStudent;
  @Output() eventDelete = new EventEmitter<IStudent>(); 
  constructor(
    private md: ModalDialogService,
  ){}
  ngOnInit(){
    this.emoji = this.getEmoji()
  }
  getEmoji(){
    let string = "👨‍🔧/👩‍🔧/👨‍🏭/👩‍🏭/👨‍💼/👩‍💼/👨‍🔬/👩‍🔬/👨‍💻/👩‍💻/👩‍🚀/👨‍🚀/👩‍✈️/👨‍✈️/👨‍🍳/👩‍🍳/👩‍🌾/👨‍🌾/👩‍🎨/👨‍🎨/🧟‍♀️/🧟‍♂️/🧙‍♀️/🧙‍♂️/🦹‍♀️/🦹‍♂️/🤵/👰/👸/🤴/💁/💁‍♂️/😀/😃/😁/😅/🤣/🙂/🙃/😍/🤩/😉/😗/😋/🤪/😛/😝/🤭/🤔/😑/😏/😎/🥺/😈/🤡/💩/🥳";
    let arr = string.split('/');
    return arr[Math.floor(Math.random() * arr.length)]
  }
  saveStudent(){
    this.md.openDialog<IStudent>(this.student, SaveStudentComponent).subscribe((data)=>{
      console.log("data student",data)
        this.student = data;
    });
  }

  deleteStudent(){
    this.eventDelete.emit(this.student);
  }
}
