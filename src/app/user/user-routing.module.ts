import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserManagementComponent} from "./userManagement/user-management.component";


const routes: Routes = [
  {path: '',redirectTo: 'user', pathMatch: 'full'},
  { path: 'user', component: UserManagementComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {

}
