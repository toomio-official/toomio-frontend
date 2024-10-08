import {Component, OnInit} from '@angular/core';
import {PostService} from "../../../services/post.service";
import {Location} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile-home',
  templateUrl: './profile-home.component.html',
  styleUrls: ['./profile-home.component.css']
})
export class ProfileHomeComponent implements OnInit{

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
  userDetails:any;
  userName:any;
  userLastName:any;
  journeyPostsMap:any;
  expandedJourneyId: string | null = null;

  constructor(
    private postService: PostService,
    private location: Location,
    private router: Router,

  ) {
  }

  ngOnInit(): void {
    this.userEmail = localStorage.getItem('userEmail');
    console.log('Stored email:', this.userEmail);
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

  getAllPosts() {
    this.postService.getAllPosts(this.userEmail).subscribe((res: any) => {
      this.postList = res;
      // Create an object to map journeyId to posts
      const journeyPostsMap: { [key: string]: any[] } = {};

      this.postList.forEach((post: any) => {
        post.likeCount = post.likes?.length || 0;
        post.commentCount = post.comments?.length || 0;

        if (post.journey) {
          if (!journeyPostsMap[post.journey]) {
            journeyPostsMap[post.journey] = [];
          }
          journeyPostsMap[post.journey].push(post);
        }
      });

      this.journeyPostsMap = journeyPostsMap;// Save the map to use later
    });
  }

  getAllJourneys() {
    this.postService.getAllJourneys(this.userEmail).subscribe((res: any) => {
      this.journeyList = res;

      this.journeyList.forEach((journey: any) => {
        journey.likeCount = journey.likes?.length || 0;
        journey.commentCount = journey.comments?.length || 0;

        // Attach related posts to each journey
        journey.posts = this.journeyPostsMap[journey._id] || [];
      });
    });
  }

  toggleJourneyDetails(journeyId: string) {
    this.expandedJourneyId = this.expandedJourneyId === journeyId ? null : journeyId;
  }

  // getAllPosts(){
  //   this.postService.getAllPosts(this.userEmail).subscribe((res:any)=>{
  //     this.postList= res;
  //     this.postList.forEach((post: any) => {
  //       post.likeCount = post.likes?.length; // Set likeCount for each post
  //       post.commentCount = post.comments?.length
  //     });
  //   })
  // }
  //
  // getAllJourneys(){
  //   this.postService.getAllJourneys(this.userEmail).subscribe((res:any)=>{
  //     this.journeyList = res;
  //     this.journeyList.forEach((post: any) => {
  //       post.likeCount = post.likes?.length; // Set likeCount for each post
  //       post.commentCount = post.comments?.length
  //     });
  //   })
  // }

  getUserDetails(){
    let obj = {
      email: this.userEmail,
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

  findProfile(data:any){
    localStorage.setItem('userProfileEmail', data.userEmail);
    this.router.navigate(['/admin/profile/find-user-profile'])
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

}
