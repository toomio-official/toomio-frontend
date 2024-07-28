import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly _imsApiGatewayUrl: any;

  constructor() {
    this._imsApiGatewayUrl = environment.baseUrl + '/';

  }

  get imsApiGatewayUrl(): any {
    return this._imsApiGatewayUrl;
  }
}
