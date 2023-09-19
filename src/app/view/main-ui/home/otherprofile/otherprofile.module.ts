import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherprofileRoutingModule } from './otherprofile-routing.module';
import { OtherprofileComponent } from './otherprofile.component';


@NgModule({
  declarations: [
    OtherprofileComponent
  ],
  imports: [
    CommonModule,
    OtherprofileRoutingModule
  ]
})
export class OtherprofileModule { }
