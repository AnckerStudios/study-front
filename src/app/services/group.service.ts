import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { GROUPS } from '../data/groups';
import { IGroup } from '../model/group';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  url = "http://localhost:8080/api/groups"
  constructor(private http: HttpClient) { }
  
  getGroups():Observable<IGroup[]>{
    return this.http.get<IGroup[]>(this.url);
    //of(GROUPS).pipe(delay(1000));
  }
  getGroup(id:number):Observable<IGroup>{
    return this.http.get<IGroup>(`${this.url}/findById`,{params: new HttpParams().set('id', id)});
    // of(GROUPS.find(item => item.id ===id) as IGroup).pipe(delay(1000));
  }
  saveGroup(group: IGroup):Observable<IGroup>{
    return this.http.post<IGroup>(this.url, group);
    // of(group).pipe(delay(1000));
  }
  deleteGroup(id: number){
    return this.http.delete<IGroup>(this.url,{params: new HttpParams().set('id', id)});
  }

}
