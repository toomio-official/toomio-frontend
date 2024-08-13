import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

  constructor(
    private router: Router,
    private postService: PostService,
  ) {
  }
  logout() {
    // Add your logout logic here, e.g., clearing tokens, etc.
    this.router.navigate(['/login']);
  }

}
