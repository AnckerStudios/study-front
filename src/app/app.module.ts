import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentPageComponent } from './pages/student-page/student-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { GroupPageComponent } from './pages/group-page/group-page.component';
import { GroupsPageComponent } from './pages/groups-page/groups-page.component';
import { StudentsPageComponent } from './pages/students-page/students-page.component';
import { ModalDialogComponent } from './components/modal-dialog/modal-dialog.component';
import { SaveStudentComponent } from './components/modal-dialog/save-student/save-student.component';
import { SaveGroupComponent } from './components/modal-dialog/save-group/save-group.component';
import { DelModalComponent } from './components/modal-dialog/del-modal/del-modal.component';
import { HttpClientModule } from '@angular/common/http';
import { ModelDirective } from './model.directive';
import { StudentComponent } from './components/student/student.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentPageComponent,
    NavBarComponent,
    GroupPageComponent,
    GroupsPageComponent,
    StudentsPageComponent,
    ModalDialogComponent,
    SaveStudentComponent,
    SaveGroupComponent,
    DelModalComponent,
    ModelDirective,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
