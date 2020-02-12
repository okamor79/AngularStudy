import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserlistComponent} from './userlist/userlist.component';
import {ResetpasswdComponent} from './resetpasswd/resetpasswd.component';
import {CreateuserComponent} from './createuser/createuser.component';


const routes: Routes = [
  {path: '', component: UserlistComponent},
  {path: 'reset', component: ResetpasswdComponent},
  {path: 'create', component: CreateuserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
