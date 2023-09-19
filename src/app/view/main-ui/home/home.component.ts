import { Component, OnInit } from '@angular/core';
import {VisibilityService} from "./visibility.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  journey:boolean = false;
  post:boolean = true;
  isHomeVisible:boolean = true;

  constructor(private visibilityService:VisibilityService) {
    this.isHomeVisible = visibilityService.getVisibility();
  }

  ngOnInit(){
    setInterval(()=>{
      this.isHomeVisible = this.visibilityService.getVisibility();
    }, 250);
  }


  postMethod(post1: HTMLDivElement, journey1: HTMLDivElement) {
    this.journey = false;
    this.post = true;
    post1.classList.add('active');
    journey1.classList.remove('active');
  }

  journeyMethod(post1: HTMLDivElement, journey1: HTMLDivElement) {
    this.journey = true;
    this.post = false;
    journey1.classList.add('active');
    post1.classList.remove('active');
  }
}
