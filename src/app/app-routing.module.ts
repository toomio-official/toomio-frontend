import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainUiComponent} from "./view/main-ui/main-ui.component";
import {LoginComponent} from "./view/login/login.component";
import {SignupComponent} from "./view/signup/signup.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'signup',
    component:SignupComponent
  },
  {
    path: 'user',
    component:MainUiComponent,
    children: [
      {
        path: 'notifications',
        loadChildren: () => import('./view/notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('./view/settings/settings.module').then(m => m.SettingsModule)
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
