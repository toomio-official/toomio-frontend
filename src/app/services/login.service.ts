import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiLoginService} from "./constant/api-login.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private apiLogInService: ApiLoginService,
  ) { }

  userLogIn(data:any){
    return this.http.post(this.apiLogInService.logIn, data)
  }

  userSignIn(data:any){
    return this.http.post(this.apiLogInService.SignIn, data)
  }
}
