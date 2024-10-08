import {Component, OnInit} from '@angular/core';
import {PostService} from "../../../services/post.service";
import {readableStreamLikeToAsyncGenerator} from "rxjs/internal/util/isReadableStreamLike";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

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
  comments: any
  isCommentModalOpen: boolean = false;
  feedData: any;
  journey: any;
  imageUrls: [] = [];
  journeyList: any
  selectedJourney: any = null; // Adjust based on your journey data type
  dropdownOpen = false;
  likeCount: any
  likePostData: any;
  userDetails:any;
  userName:any;



  constructor(
    private postService: PostService,
    private toastr: ToastrService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.userEmail = localStorage.getItem('userEmail');
    console.log('Stored email:', this.userEmail);
    this.getAllPosts();
    this.getAllJourneys();
    this.getUserDetails();
  }

  selectOption(option: string): void {
    this.selectedOption = option;
  }

  getAllPosts() {
    this.postService.loadFeed(this.userEmail).subscribe((res: any) => {
      this.feedData = res;
      // Assuming this.feedData is an array of posts
      this.feedData.forEach((post: any) => {
        // debugger
        post.likeCount = post.likes.length; // Set likeCount for each post
        this.likeCount = post.likes.length
        post.commentCount = post.comments.length
      });
    });
  }


  getAllJourneys() {
    this.postService.getAllJourneys(this.userEmail).subscribe((res: any) => {
      this.journeyList = res;
    })
  }

  getUserDetails(){
    let obj = {
      email: this.userEmail,
    }

    this.postService.getUserDetails(obj).subscribe((res:any)=>{
      this.userDetails = res.UserAttributes[7];
      this.userName = res.UserAttributes[4];
    })
  }

  onJourneyChange(event: any) {
    const selectedJourneyObject = event.target.value;
    this.selectedJourney = selectedJourneyObject;
    this.journey = selectedJourneyObject;
  }

  selectJourney(journey: any) {
    // debugger
    this.selectedJourney = journey.title
    // debugger
    this.journey = journey._id;
    this.dropdownOpen = false; // Close dropdown after selection
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  savePost() {
    let data = {
      title: this.postName,
      content: this.content,
      userEmail: this.userEmail,
      journey: this.selectedJourney,
      imageUrls: this.imageUrls
    };

    this.postService.createPost(data).subscribe((res: any) => {
      this.postData = res;

      // Show toast message for success
      this.toastr.success('Post created', 'Success');

      // Clear the form after saving
      this.postName = '';
      this.content = '';
      this.selectedJourney = ''; // Clear the selected journey
      this.imageUrls = []; // Clear the uploaded images if needed
    });

    console.log('Post Name:', this.postName);
    console.log('Post Description:', this.content);
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


  getPostLikes(data: any) {
    this.postService.getPostLikes(data._id).subscribe((res: any) => {
      this.likeCount = res.count;
      // debugger
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

      // this.getPostLikes(obj)
    })
  }

  addComment(data:any) {
    // debugger
    let obj= {
      smPostId: data._id,
      userEmail: data.userEmail,
      content: this.content
    }
    this.postService.commentPost(obj).subscribe((res:any)=>{
      this.comments = res;
      this.content = '';
      this.closeCommentModal()
      // debugger
    })
  }

  openCommentModal(data:any) {
    this.isCommentModalOpen = true;
    this.postService.getAllPostComments(data._id).subscribe((res:any)=>{
      this.comments = res;
    })

  }

  closeCommentModal() {
    this.isCommentModalOpen = false;
    this.comments = []
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      console.log('File selected:', file);
    }
  }
  findProfile(data:any){
    localStorage.setItem('userProfileEmail', data.userEmail);
    this.router.navigate(['/admin/profile/find-user-profile'])
  }

}
