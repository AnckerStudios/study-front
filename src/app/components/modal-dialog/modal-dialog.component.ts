import { Component } from '@angular/core';
import { IGroup } from 'src/app/model/group';
import { Modal } from 'src/app/model/modal';
import { ModalDialogService } from 'src/app/services/modal-dialog.service';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.css']
})
export class ModalDialogComponent {
  Modal = Modal;
  
  constructor(public md: ModalDialogService) {}

  confirm<T>(data: T) {
    this.md.confirm<T>(data)
    console.log("modal global",data);
  }
  close(){
    this.md.close()
  }
}
