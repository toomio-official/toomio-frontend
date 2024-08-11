import {Component, OnInit} from '@angular/core';
import {PostService} from "../../../services/post.service";
import {readableStreamLikeToAsyncGenerator} from "rxjs/internal/util/isReadableStreamLike";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  selectedOption: string = '';
  postName: string = '';
  content: string = '';
  journeyDescription: any;
  journeyName: any;
  postData: any;
  journeyData: any;
  posts: any[] = [];
  newComment: any;
  userEmail: string | null = null;
  showPost: boolean = false;
  likes: number = 0;
  comments: string[] = [];
  isCommentModalOpen: boolean = false;
  feedData: any;
  journey: any;
  imageUrls:[] = [];
  journeyList:any
  selectedJourney: any = null; // Adjust based on your journey data type
  dropdownOpen = false;
  likeCount: number | undefined
  likePostData:any;


  constructor(
    private postService: PostService,
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

  getAllPosts() {
    this.postService.loadFeed(this.userEmail).subscribe((res: any) => {
      this.feedData = res;
debugger
      // Assuming this.feedData is an array of posts
      this.feedData.forEach((post:any) => {
        debugger
        post.likeCount = post.likes.length; // Set likeCount for each post
      });
    });
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

  onJourneyChange(event: any) {
    debugger
    const selectedJourneyObject = event.target.value;
    this.selectedJourney = selectedJourneyObject;
    this.journey = selectedJourneyObject.id; // or use _id if that's the correct property
    debugger;
  }

  selectJourney(journey: any) {
    this.selectedJourney = journey.title
    debugger
    this.journey = journey._id;
    this.dropdownOpen = false; // Close dropdown after selection
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  savePost() {
    let data = {
      id: 0,
      title: this.postName,
      content: this.content,
      userEmail: this.userEmail,
      journey: this.journey,
      imageUrls: this.imageUrls
    }
    debugger
    this.postService.createPost(data).subscribe((res: any) => {
      this.postData = res;
    })
    console.log('Post Name:', this.postName);
    console.log('Post Description:', this.content);

    // Optionally, clear the form after saving
    this.postName = '';
    this.content = '';
  }

  saveJourney() {
    let data = {
      // id:0,
      title: this.journeyName,
      description: this.journeyDescription,
      userEmail: this.userEmail
    }
    this.postService.createJourney(data).subscribe((res: any) => {
      this.journeyData = res;
    })
    console.log('Post Name:', this.journeyName);
    console.log('Post Description:', this.journeyDescription);

    // Optionally, clear the form after saving
    this.journeyName = '';
    this.journeyDescription = '';
  }

  // likePost(postId: number) {
  //   // this.postService.likePost(postId);
  // }
  //
  // addComment(postId: number) {
  //   // const comment: Comment = {
  //   //   id: 0,
  //   //   postId: postId,
  //   //   text: this.newComment
  //   // };
  //   // this.postService.addComment(postId, comment);
  //   // this.newComment = '';
  // }


  getPostLikes(data:any){
    debugger
this.postService.getPostLikes(data._id).subscribe((res:any)=>{
  this.likeCount = res.count;
  debugger
})
  }

  likePost(data:any){
    debugger
  let  obj = {
      smPostId: data._id,
      userEmail:this.userEmail
    }

    this.postService.likePost(obj).subscribe((res:any)=>{
      this.likePostData = res;
      this.getPostLikes(obj)
    })
  }

  //
  // addComment(): void {
  //   if (this.newComment.trim()) {
  //     this.comments.push(this.newComment);
  //     this.newComment = '';
  //   }
  // }
  addComment() {
    if (this.newComment.trim()) {
      this.comments.push(this.newComment.trim());
      this.newComment = '';
      this.closeCommentModal();
    }
  }

  openCommentModal() {
    this.isCommentModalOpen = true;
  }

  closeCommentModal() {
    this.isCommentModalOpen = false;
  }


}
