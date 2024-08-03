import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class ApiPostService {
  private readonly _createPost:string;
  private readonly _createJourney:string;

  constructor(private _apiService: ApiService) {
    this._createPost = _apiService.imsApiGatewayUrl + '';
    this._createJourney = _apiService.imsApiGatewayUrl + 'journeys';
  }

  get createPost():string {
    return this._createPost;
  }
  get createJourney():string {
    return this._createJourney;
  }
}
