import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class ApiPostService {
  private readonly _createPost:string;
  private readonly _createJourney:string;
  private readonly _likePost:string;
  private readonly _commentePost:string;
  private readonly _findUser:string;
  private readonly _loadFeed:string

  constructor(private _apiService: ApiService) {
    this._createPost = _apiService.imsApiGatewayUrl + 'posts';
    this._createJourney = _apiService.imsApiGatewayUrl + 'journeys';
    this._likePost = _apiService.imsApiGatewayUrl + 'posts/likepost';
    this._commentePost = _apiService.imsApiGatewayUrl + 'posts/likepost';
    this._findUser = _apiService.imsApiGatewayUrl + 'user/';
    this._loadFeed = _apiService.imsApiGatewayUrl + 'feed?email=';
  }

  get createPost():string {
    return this._createPost;
  }
  get createJourney():string {
    return this._createJourney;
  }
  get likePost():string {
    return this._likePost;
  }
  get commentPost():string {
    return this._commentePost;
  }
  get findUser():string {
    return this._findUser;
  }
  get loadFeed():string {
    return this._loadFeed;
  }
}
