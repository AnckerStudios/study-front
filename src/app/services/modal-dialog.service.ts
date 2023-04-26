import { ComponentRef, Injectable, Type, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { Modal } from '../model/modal';
import { IGroup } from '../model/group';

@Injectable({
  providedIn: 'root'
})
export class ModalDialogService {
  public component$ = new Subject<any>();


  inputData: any;
  res?: Subject<any>;
  groups:IGroup[] = [];
  getInput<T>(): T{
    return this.inputData as T;
  }
  setGroups(groups:IGroup[]){
    this.groups = groups;
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
