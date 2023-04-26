import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { DelModalComponent } from 'src/app/components/modal-dialog/del-modal/del-modal.component';
import { SaveGroupComponent } from 'src/app/components/modal-dialog/save-group/save-group.component';
import { IGroup } from 'src/app/model/group';
import { Modal } from 'src/app/model/modal';
import { GroupService } from 'src/app/services/group.service';
import { ModalDialogService } from 'src/app/services/modal-dialog.service';

@Component({
  selector: 'app-groups-page',
  templateUrl: './groups-page.component.html',
  styleUrls: ['./groups-page.component.css']
})
export class GroupsPageComponent {
  groups?: IGroup[];
  notifier$ = new Subject();
  error?: string;
  constructor(
    private groupService: GroupService,
    private md: ModalDialogService
  ) { }

  ngOnInit() {
    this.getGroups();
  }

  getGroups() {
    this.groupService.getGroups()
      .pipe(takeUntil(this.notifier$))
      .subscribe({
        next: (data) => {
          this.groups = data;
        },
        error: (e) => {
          this.error = 'GG Ошибка'
        }
      });
  }

  saveGroup(group: IGroup | undefined, index: number) {
    console.log("add");
    this.groups && this.md.setGroups(this.groups);
    this.md.openDialog<IGroup>(group, SaveGroupComponent)
      .pipe(takeUntil(this.notifier$))
      .subscribe({
        next: (data) => {
          console.log("data", data)
          if (this.groups) {
            group ? this.groups[index] = data : this.groups?.push(data);
          }
        },
        error: (e) => console.error("r err", e)
      });
  }

  deleteGroup(group: IGroup) {
    this.groupService.deleteGroup(group.id)
      .pipe(takeUntil(this.notifier$))
      .subscribe({
        next: (data) => {
          console.log("delete ", data);
          this.groups = this.groups?.filter((item) => item.id != group.id);
        },
        error: (e) => {
          console.error("r err", e)
        }
      })
  }
  
  ngOnDestroy() {
    this.notifier$.complete();
  }
}
