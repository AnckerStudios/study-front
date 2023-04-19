import { ComponentRef, Injectable, Type, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { Modal } from '../model/modal';

@Injectable({
  providedIn: 'root'
})
export class ModalDialogService {
  public component$ = new Subject<any>();


  inputData: any;
  res?: Subject<any>;
 
  getInput<T>(): T{
    return this.inputData as T;
  }
  openDialog<T>(obj: T | undefined, type: Type<any>): Subject<T>{
    
    console.log("service");
    this.inputData = obj;
     this.component$.next(type);
    return this.res = new Subject<T>();
  }
  confirm<T>(obj: T){
    this.res?.next(obj);
    this.close();
  }
  close(){
    this.component$.next(undefined)
    this.res?.complete;
  }
}
