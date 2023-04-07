import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GROUPS } from '../data/groups';
import { IGroup } from '../model/group';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor() { }
  
  getGroups():Observable<IGroup[]>{
    return of(GROUPS);
  }
  getGroup(id:number):Observable<IGroup>{
    return of(GROUPS.find(item => item.id ===id) as IGroup);
  }
}
