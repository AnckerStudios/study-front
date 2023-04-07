import { Component } from '@angular/core';
import { IGroup } from 'src/app/model/group';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-groups-page',
  templateUrl: './groups-page.component.html',
  styleUrls: ['./groups-page.component.css']
})
export class GroupsPageComponent {
  groups?:IGroup[];
  constructor(private groupService: GroupService){}

  ngOnInit(){
    this.getStudents();
  }
  getStudents(){
    this.groupService.getGroups().subscribe(item=>this.groups = item);
  }
}
