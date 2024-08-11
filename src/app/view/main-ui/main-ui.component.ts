import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-main-ui',
  templateUrl: './main-ui.component.html',
  styleUrls: ['./main-ui.component.css']
})
export class MainUiComponent {
  dropdownOpen = false;

  constructor(private router: Router) {}

  toggleDropdown() {
    debugger
    this.dropdownOpen = !this.dropdownOpen;
  }

  logout() {
    // Add your logout logic here, e.g., clearing tokens, etc.
    this.router.navigate(['/login']);
  }
}
