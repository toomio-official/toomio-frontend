import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileHomeComponent } from './profile-home/profile-home.component';
import {FormsModule} from "@angular/forms";
import { FindUserProfileComponent } from './find-user-profile/find-user-profile.component';


@NgModule({
  declarations: [
    ProfileHomeComponent,
    FindUserProfileComponent
  ],
    imports: [
        CommonModule,
        ProfileRoutingModule,
        FormsModule
    ]
})
export class ProfileModule { }
