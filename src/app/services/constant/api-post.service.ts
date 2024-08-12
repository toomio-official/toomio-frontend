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
  private readonly _getAllPostComments:string;
  private readonly _getFollowersCount: string;
  private readonly _getFollowingCount:string;
  private readonly _followAUser:string;
  private readonly _getAllNotifications:string;

  constructor(private _apiService: ApiService) {
    this._createPost = _apiService.imsApiGatewayUrl + 'posts';
    this._createJourney = _apiService.imsApiGatewayUrl + 'journeys';
    this._likePost = _apiService.imsApiGatewayUrl + 'posts/likepost';
    this._commentePost = _apiService.imsApiGatewayUrl + 'posts/commentpost';
    this._findUser = _apiService.imsApiGatewayUrl + 'user/';
    this._loadFeed = _apiService.imsApiGatewayUrl + 'feed?email=';
    this._getAllJourneys = _apiService.imsApiGatewayUrl + 'journeys/user/';
    this._getPostLikes = _apiService.imsApiGatewayUrl + 'posts/';
    this._getAllPosts = _apiService.imsApiGatewayUrl + 'posts/user/';
    this._getAllPostComments = _apiService.imsApiGatewayUrl + 'posts/';
    this._getFollowersCount = _apiService.imsApiGatewayUrl + 'users/';
    this._getFollowingCount = _apiService.imsApiGatewayUrl + 'users/';
    this._followAUser = _apiService.imsApiGatewayUrl + 'users/follow';
    this._getAllNotifications = _apiService.imsApiGatewayUrl + 'notifications?email='

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
    return this._getAllPosts;
  }
  get getAllPostComments():string {
    return this._getAllPostComments;
  }
  get getFollowersCount(){
    return this._getFollowersCount;
  }
  get getFollowingCount(){
    return this._getFollowingCount;
  }
  get followAUser(){
    return this._followAUser;
  }
  get getAllNotification(){
    return this._getAllNotifications;
  }
}
