import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IGroup } from 'src/app/model/group';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-group-page',
  templateUrl: './group-page.component.html',
  styleUrls: ['./group-page.component.css']
})
export class GroupPageComponent {
  group?:IGroup;
  constructor(
    private route: ActivatedRoute,
    private groupService: GroupService
  ){}

  ngOnInit(): void {
    this.getStudent();
  }
  
  getStudent(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.groupService.getGroup(id)
      .subscribe(group => this.group = group);
  }
}
