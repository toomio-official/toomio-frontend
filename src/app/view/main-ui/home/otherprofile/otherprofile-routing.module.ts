import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OtherprofileComponent} from "./otherprofile.component";

const routes: Routes = [
  {
    path: '',
    component: OtherprofileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherprofileRoutingModule { }
