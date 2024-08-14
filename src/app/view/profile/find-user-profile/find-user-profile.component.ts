import {Component, OnInit} from '@angular/core';
import {PostService} from "../../../services/post.service";
import {Location} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-find-user-profile',
  templateUrl: './find-user-profile.component.html',
  styleUrls: ['./find-user-profile.component.css']
})


export class FindUserProfileComponent   implements OnInit{

  // selectedOption: string = '';
  userEmail: string | null = null;
  journeyList:any
  postList:any;
  selectedOption: string = 'post';
  // postList: any[] = [];
  selectedPostId: string = '';
  isCommentModalOpen: boolean = false;
  comments: any[] = [];
  content: any;
  likePostData: any;
  likeCount:any;
  followersCount:any;
  followingCount:any;
  profileUserEmail:string | null = null
  userDetails:any;
  userName:any;
  followUserData:any;
  followUserButton: boolean = false;
  userLastName:any
  constructor(
    private postService: PostService,
    private location: Location,
    private router: Router,

  ) {
  }

  ngOnInit(): void {
    this.userEmail = localStorage.getItem('userEmail');
    console.log('Stored email:', this.userEmail);
    this.profileUserEmail = localStorage.getItem('userProfileEmail');
    console.log('Stored user email:', this.profileUserEmail);
    this.getAllPosts();
    this.getAllJourneys();
    this.getFollowersCount();
    this.getFollowingCount();
    this.getUserDetails();

  }

  // selectOption(option: string): void {
  //   this.selectedOption = option;
  // }

  selectOption(option: string) {
    this.selectedOption = option;
    if (option === 'post') {
      this.getAllPosts();
    } else if (option === 'journey') {
      this.getAllJourneys();
      // You can call the journey-related method here if needed
    }
  }

  goBack(): void {
    this.location.back();
  }

  getAllPosts(){
    this.postService.getAllPosts(this.profileUserEmail).subscribe((res:any)=>{
      this.postList= res;
      this.postList.forEach((post: any) => {
        post.likeCount = post.likes.length; // Set likeCount for each post
        post.commentCount = post.comments.length
      });
    })
  }

  getAllJourneys(){
    this.postService.getAllJourneys(this.profileUserEmail).subscribe((res:any)=>{
      this.journeyList = res;
      this.journeyList.forEach((post: any) => {
        post.likeCount = post.likes.length; // Set likeCount for each post
        post.commentCount = post.comments.length
      });
    })
  }

  getUserDetails(){
    let obj = {
      email: this.profileUserEmail,
    }

    this.postService.getUserDetails(obj).subscribe((res:any)=>{
      this.userDetails = res.UserAttributes[7];
      this.userName = res.UserAttributes[4];
      this.userLastName = res.UserAttributes[5]

    })
  }

  likePost(data: any) {
    let obj = {
      smPostId: data._id,
      userEmail: this.userEmail
    }

    this.postService.likePost(obj).subscribe((res: any) => {
      this.likePostData = res;
      this.getAllPosts();
    })
  }

  addComment(data:any) {
    let obj= {
      smPostId: data._id,
      userEmail: data.userEmail,
      content: this.content
    }
    this.postService.commentPost(obj).subscribe((res:any)=>{
      this.comments = res;
      this.content = '';
      this.closeCommentModal()
    })
  }

  openCommentModal(data:any) {
    this.isCommentModalOpen = true;
    this.selectedPostId = data._id;  // Ensure this is set to the current item's ID

    this.postService.getAllPostComments(data._id).subscribe((res:any)=>{
      this.comments = res;
    })

  }

  closeCommentModal() {
    this.isCommentModalOpen = false;
    this.comments = []
  }


  getPostLikes(data: any) {
    this.postService.getPostLikes(data._id).subscribe((res: any) => {
      this.likeCount = res.count;
    })
  }

  findProfile(){
    this.router.navigate(['/user-profile'])
  }

  getFollowersCount(){
    this.postService.getFollowersCount(this.userEmail).subscribe((res:any)=>{
      this.followersCount = res.count;
    })
  }

  getFollowingCount(){
    this.postService.getFollowingCount(this.userEmail).subscribe((res:any)=>{
      this.followingCount = res.count;
    })
  }

  followAUSer(){
    let obj = {
      followerUserEmail: this.userEmail,
      followingUserEmail: this.profileUserEmail,
    }
    this.postService.followAUser(obj).subscribe((res:any)=>{
      this.followUserData = res;
      this.followUserButton = true
    })
  }

}
