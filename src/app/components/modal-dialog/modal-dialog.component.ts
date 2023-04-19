import { Component, EventEmitter, TemplateRef, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { IGroup } from 'src/app/model/group';
import { Modal } from 'src/app/model/modal';
import { ModalDialogService } from 'src/app/services/modal-dialog.service';
import { SaveGroupComponent } from './save-group/save-group.component';
import { ModelDirective } from 'src/app/model.directive';
import { SaveStudentComponent } from './save-student/save-student.component';
import { DelModalComponent } from './del-modal/del-modal.component';
import { ModalComponent } from 'src/app/model/modalComponent';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.css']
})
export class ModalDialogComponent {
  compnent = SaveGroupComponent;
  Modal = Modal;
  @ViewChild(ModelDirective) appModel!: ModelDirective;


  constructor(public md: ModalDialogService) {}
  ngOnInit(){
    console.log("AAAAAAAAA",this.appModel);
    // const viewContainerRef = this.appModel.viewContainerRef;
    // const componentRef = viewContainerRef.createComponent(this.md.compnent);
    // console.log("viewContainerRef",componentRef);
    this.md.component$.subscribe({
      next: (data)=>{
        if(data){
        const viewContainerRef = this.appModel.viewContainerRef;
        viewContainerRef.clear();
        const componentRef = viewContainerRef.createComponent<ModalComponent>(data);
        componentRef.instance.response.subscribe(e => this.confirm(e));
        }
      }
    })
  }
  confirm<T>(data: T) {
    this.md.confirm<T>(data);
    console.log("modal global",data);
  }
  close(){
    this.md.close()
  }
}
