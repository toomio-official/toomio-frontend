import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class ApiLoginService {

  private readonly _login:string;
  private readonly _signIn: string;
  constructor(private _apiService: ApiService) {
    this._login = _apiService.imsApiGatewayUrl + 'auth/login';
    this._signIn = _apiService.imsApiGatewayUrl + 'auth/register';
  }

  get logIn():string {
    return this._login;
  }
  get SignIn():string {
    return this._signIn;
  }

}
