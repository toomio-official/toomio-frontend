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
    path: 'admin',
    component:MainUiComponent,
    children: [
      {
        path: 'notifications',
        loadChildren: () => import('./view/notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('./view/settings/settings.module').then(m => m.SettingsModule)
      },
      {
        path: 'home-page',
        loadChildren: () => import('./view/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'profile-home',
        loadChildren: () => import('./view/profile/profile.module').then(m => m.ProfileModule)
      },
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
