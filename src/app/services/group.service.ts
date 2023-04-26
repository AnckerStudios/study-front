import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { GROUPS } from '../data/groups';
import { IGroup } from '../model/group';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  url = `${environment.apiUrl}/groups`
  constructor(private http: HttpClient) { }
  
  getGroups():Observable<IGroup[]>{
    return this.http.get<IGroup[]>(this.url).pipe(delay(500));
  }
  getGroup(id:number):Observable<IGroup>{
    return this.http.get<IGroup>(`${this.url}/findById`,{params: new HttpParams().set('id', id)}).pipe(delay(500));
  }
  saveGroup(group: IGroup):Observable<IGroup>{
    return this.http.post<IGroup>(this.url, group).pipe(delay(500));
  }
  deleteGroup(id: number){
    return this.http.delete<IGroup>(this.url,{params: new HttpParams().set('id', id)});
  }

}
