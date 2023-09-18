import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainUiComponent} from "./view/main-ui/main-ui.component";
import {LoginComponent} from "./view/login/login.component";
import {SignupComponent} from "./view/signup/signup.component";

const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: 'user', redirectTo: '/user/home', pathMatch: 'full' },
  {
    path: 'auth/login',
    component:LoginComponent
  },
  {
    path: 'auth/signup',
    component:SignupComponent
  },
  {
    path: 'user',
    component:MainUiComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./view/main-ui/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./view/notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('./view/settings/settings.module').then(m => m.SettingsModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./view/main-ui/profile/profile.module').then(m => m.ProfileModule)
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
