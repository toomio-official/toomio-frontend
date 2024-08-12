import {Component, OnInit} from '@angular/core';
import {PostService} from "../../services/post.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit{

  userEmail: string | null = null;
  notifications:any;

  constructor(
    private postService: PostService,
    private router: Router,
  ) {
  }


  ngOnInit(): void {
    this.userEmail = localStorage.getItem('userEmail');
    console.log('Stored email:', this.userEmail);
    this.getAllNotifications();
  }

  getAllNotifications(){
    this.postService.getAllNotifications(this.userEmail).subscribe((res:any)=>{
      this.notifications = res;
      // debugger
    })
  }

}
