import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-main-ui',
  templateUrl: './main-ui.component.html',
  styleUrls: ['./main-ui.component.css']
})
export class MainUiComponent {
  dropdownOpen = false;
  userName: string = '';
  searchUserData:any


  constructor(
    private router: Router,
    private postService: PostService,
  ) {
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
  debugger
})
  }
}
