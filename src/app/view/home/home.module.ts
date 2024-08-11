import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import {FormsModule} from "@angular/forms";
import {NgSelectModule} from "@ng-select/ng-select";
import {DropdownModule} from "primeng/dropdown";


@NgModule({
  declarations: [
    HomePageComponent
  ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        FormsModule,
      NgSelectModule,
      DropdownModule,


    ]
})
export class HomeModule { }
