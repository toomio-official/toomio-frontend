import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiPostService} from "./constant/api-post.service";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient,
    private apiPostService: ApiPostService,
  ) { }

  createPost(data:any){
    return this.http.post(this.apiPostService.createPost, data);
  }

  createJourney(data:any){
    return this.http.post(this.apiPostService.createJourney, data);
  }

  likePost(data:any){
    return this.http.put(this.apiPostService.likePost, data);
  }

  commentPost(data:any){
    return this.http.put(this.apiPostService.commentPost, data);
  }

  loadFeed(email:any){
    return this.http.get(this.apiPostService.loadFeed + email)
  }

  getAllJourneys(email:any){
    return this.http.get(this.apiPostService.getAllJourneys + email)
  }

  getPostLikes(id:any){
    return this.http.get(this.apiPostService.getPostLikes + id + '/likes/count')
  }

  getAllPosts(email:any){
    return this.http.get(this.apiPostService.getAllPosts + email)

  }
}
