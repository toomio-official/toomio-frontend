import { Component } from '@angular/core';

@Component({
  selector: 'app-otherprofile',
  templateUrl: './otherprofile.component.html',
  styleUrls: ['./otherprofile.component.css']
})
export class OtherprofileComponent {

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

  journeyMenu(dropj: HTMLDivElement) {
    dropj.classList.toggle('visible');
  }

  visiblePost(visible_post: HTMLDivElement) {
    visible_post.classList.toggle('postInJourney');
  }

}
