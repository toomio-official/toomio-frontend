import {Component, OnInit} from '@angular/core';
import {PostService} from "../../../services/post.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{

  selectedOption: string = '';
  postName: string = '';
  postDescription: string = '';
  journeyDescription:any;
  journeyName:any;
  postData:any;
  journeyData:any;
  posts: any[] = [];
  newComment: any;
  userEmail: string | null = null;

  constructor(
    private postService: PostService,
  ) {
  }

  ngOnInit(): void {
    this.userEmail = localStorage.getItem('userEmail');
    console.log('Stored email:', this.userEmail);

  }
  selectOption(option: string): void {
    this.selectedOption = option;
  }

  savePost() {
    debugger
    let data ={
      id:0,
      title:this.postName,
      description:this.postDescription,
    }
    this.postService.createPost(data).subscribe((res:any)=>{
      this.postData = res;
      debugger
    })
    console.log('Post Name:', this.postName);
    console.log('Post Description:', this.postDescription);

    // Optionally, clear the form after saving
    this.postName = '';
    this.postDescription = '';
  }

  saveJourney(){
    debugger
    let data ={
      // id:0,
      title:this.journeyName,
      description:this.journeyDescription,
      userEmail:this.userEmail
    }
    debugger
    this.postService.createJourney(data).subscribe((res:any)=>{
      this.journeyData = res;
      debugger
    })
    console.log('Post Name:', this.journeyName);
    console.log('Post Description:', this.journeyDescription);

    // Optionally, clear the form after saving
    this.journeyName = '';
    this.journeyDescription = '';
  }

  likePost(postId: number) {
    // this.postService.likePost(postId);
  }

  addComment(postId: number) {
    // const comment: Comment = {
    //   id: 0,
    //   postId: postId,
    //   text: this.newComment
    // };
    // this.postService.addComment(postId, comment);
    // this.newComment = '';
  }
}
