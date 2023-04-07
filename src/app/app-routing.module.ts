import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupPageComponent } from './pages/group-page/group-page.component';
import { GroupsPageComponent } from './pages/groups-page/groups-page.component';
import { StudentPageComponent } from './pages/student-page/student-page.component';
import { StudentsPageComponent } from './pages/students-page/students-page.component';

const routes: Routes = [
  {path:'',redirectTo:'/groups', pathMatch: 'full'},
  {path:'groups/:id',component:GroupPageComponent},
  {path:"students/:id",component:StudentPageComponent},
  {path:"groups",component:GroupsPageComponent},
  {path:"students",component:StudentsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
