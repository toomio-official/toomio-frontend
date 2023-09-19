import {Component, OnInit} from '@angular/core';
import {VisibilityService} from "./home/visibility.service";
import {Router, NavigationEnd} from "@angular/router";
import {filter} from "rxjs";

@Component({
  selector: 'app-main-ui',
  templateUrl: './main-ui.component.html',
  styleUrls: ['./main-ui.component.css']
})
export class MainUiComponent implements OnInit{
  url: string = '';

  constructor(private visibilityService:VisibilityService, private router:Router) {
  }

  homeVisible() {
    this.visibilityService.homeVisible();
  }

  profileLoad() {
    this.visibilityService.otherProfileVisible();
    this.router.navigate(['user', 'home', 'op']);
  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(()=> {
      this.url = this.router.url.toString();
      if(this.url == '/user/home'){
        this.visibilityService.homeVisible();
        this.router.navigate(['user', 'home']);
      } else if(this.url == '/user/home/op'){
        this.visibilityService.otherProfileVisible();
        this.router.navigate(['user', 'home', 'op']);
      }
    });
  }
}
