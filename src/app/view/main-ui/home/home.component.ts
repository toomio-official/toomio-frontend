import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  journey:boolean = false;
  post:boolean = true;

  constructor() {
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
