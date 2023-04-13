import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Modal } from '../model/modal';

@Injectable({
  providedIn: 'root'
})
export class ModalDialogService {
  
  modalType: Modal = Modal.none;
  inputData: any;
  res?: Subject<any>;
  
  constructor() { }
  getInput<T>(): T{
    return this.inputData as T;
  }
  openDialog<T>(obj: T | undefined, type: Modal): Subject<T>{
    this.inputData = obj;
    this.modalType = type;
    return this.res = new Subject<T>();
  }
  confirm<T>(obj: T){
    this.res?.next(obj);
    this.close();
  }
  close(){
    this.modalType = Modal.none;
    this.res?.complete;
  }
}
