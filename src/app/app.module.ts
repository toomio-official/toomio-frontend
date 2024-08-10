import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './view/login/login.component';
import {SignupComponent} from './view/signup/signup.component';
import {NotificationsComponent} from './view/notifications/notifications.component';
import {SettingsComponent} from './view/settings/settings.component';
import {FormsModule} from '@angular/forms';
import {MainUiComponent} from './view/main-ui/main-ui.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NotificationsComponent,
    SettingsComponent,
    MainUiComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
