import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentPageComponent } from './pages/student-page/student-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { GroupPageComponent } from './pages/group-page/group-page.component';
import { GroupsPageComponent } from './pages/groups-page/groups-page.component';
import { StudentsPageComponent } from './pages/students-page/students-page.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentPageComponent,
    NavBarComponent,
    GroupPageComponent,
    GroupsPageComponent,
    StudentsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
