import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalComponent } from 'src/app/model/modalComponent';
import { GroupService } from 'src/app/services/group.service';
import { ModalDialogService } from 'src/app/services/modal-dialog.service';

@Component({
  selector: 'app-del-modal',
  templateUrl: './del-modal.component.html',
  styleUrls: ['./del-modal.component.css']
})
export class DelModalComponent implements ModalComponent{
  constructor(private groupService: GroupService, private md: ModalDialogService){}
  @Output() response = new EventEmitter<boolean>();

  ngOnInit(){
    console.log("type",this.md.getInput(),typeof this.md.getInput())
    
    // this.md.inputData
  }
  confirm(bool: boolean) {
  //   this.groupService.deleteGroup().subscribe({
  //     next: (data) => {
  //       this.response.emit(data);
  //     },
  //     error: (e) => console.error("r err",e)
  // })
  }
}
