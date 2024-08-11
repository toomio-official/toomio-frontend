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
  private readonly _loadFeed:string;
  private readonly _getAllJourneys: string;
  private readonly _getPostLikes:string;
  private readonly _getAllPosts:string;

  constructor(private _apiService: ApiService) {
    this._createPost = _apiService.imsApiGatewayUrl + 'posts';
    this._createJourney = _apiService.imsApiGatewayUrl + 'journeys';
    this._likePost = _apiService.imsApiGatewayUrl + 'posts/likepost';
    this._commentePost = _apiService.imsApiGatewayUrl + 'posts/likepost';
    this._findUser = _apiService.imsApiGatewayUrl + 'user/';
    this._loadFeed = _apiService.imsApiGatewayUrl + 'feed?email=';
    this._getAllJourneys = _apiService.imsApiGatewayUrl + 'journeys/user/';
    this._getPostLikes = _apiService.imsApiGatewayUrl + 'posts/';
    this._getAllPosts = _apiService.imsApiGatewayUrl + 'posts/user/'
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
  get getAllJourneys():string {
    return this._getAllJourneys;
  }
  get getPostLikes():string {
    return this._getPostLikes;
  }
  get getAllPosts():string {
    return this._getAllPosts
  }
}
