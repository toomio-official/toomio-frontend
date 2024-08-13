import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-main-ui',
  templateUrl: './main-ui.component.html',
  styleUrls: ['./main-ui.component.css']
})
export class MainUiComponent implements OnInit {
  dropdownOpen = false;
  userName: string = '';
  searchUserData:any
  userEmail: string | null = null;
  userDetails:any

  constructor(
    private router: Router,
    private postService: PostService,
  ) {
  }

  ngOnInit(): void {
    this.userEmail = localStorage.getItem('userEmail');
    console.log('Stored email:', this.userEmail);
    this.getUserDetails();
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  logout() {
    // Add your logout logic here, e.g., clearing tokens, etc.
    this.router.navigate(['/login']);
  }

  searchUser() {
this.postService.searchUsers(this.userName).subscribe((res:any)=>{
  this.searchUserData = res;
})
  }

  getUserDetails(){
    let obj = {
      email: this.userEmail,
    }

    this.postService.getUserDetails(obj).subscribe((res:any)=>{
      this.userDetails = res.UserAttributes[7];
    })
  }

}
