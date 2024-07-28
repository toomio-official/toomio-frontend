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

  constructor(
    private postService: PostService,
    private location: Location
  ) {
  }

  ngOnInit(): void {
  }

  selectOption(option: string): void {
    this.selectedOption = option;
  }

  goBack(): void {
    this.location.back();
  }
}
