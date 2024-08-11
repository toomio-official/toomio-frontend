import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfileHomeComponent} from "./profile-home/profile-home.component";
import {FindUserProfileComponent} from "./find-user-profile/find-user-profile.component";

const routes: Routes = [
  {
    path:'profile-home',
    component: ProfileHomeComponent
  },

  {
    path:'find-user-profile',
    component: FindUserProfileComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
