import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VisibilityService {
  private isVisible = true;

  constructor() { }

  getVisibility(): boolean{
    return this.isVisible;
  }

  homeVisible(){
    this.isVisible = true;
  }

  otherProfileVisible(){
    this.isVisible = false;
  }
}
