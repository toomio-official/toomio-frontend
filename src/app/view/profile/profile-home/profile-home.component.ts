import {Component, OnInit} from '@angular/core';
import {PostService} from "../../../services/post.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-profile-home',
  templateUrl: './profile-home.component.html',
  styleUrls: ['./profile-home.component.css']
})
export class ProfileHomeComponent implements OnInit{

  selectedOption: string = '';
  userEmail: string | null = null;
  journeyList:any
  postList:any

  constructor(
    private postService: PostService,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.userEmail = localStorage.getItem('userEmail');
    console.log('Stored email:', this.userEmail);
    this.getAllPosts();
    this.getAllJourneys();
  }

  selectOption(option: string): void {
    this.selectedOption = option;
  }

  goBack(): void {
    this.location.back();
  }

  getAllPosts(){
    this.postService.getAllPosts(this.userEmail).subscribe((res:any)=>{
      this.postList= res
    })
  }

  getAllJourneys(){
    this.postService.getAllJourneys(this.userEmail).subscribe((res:any)=>{
      this.journeyList = res;
      // for (var i = 0; i < res.length; i++) {
      //   this.journeyList.push({
      //     label:
      //     res[i].title,
      //
      //     value:  res[i].title,
      //   });
      // }
    })
  }


}
