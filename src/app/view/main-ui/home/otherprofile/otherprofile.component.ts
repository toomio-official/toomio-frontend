import { Component } from '@angular/core';
import {VisibilityService} from "../visibility.service";

@Component({
  selector: 'app-otherprofile',
  templateUrl: './otherprofile.component.html',
  styleUrls: ['./otherprofile.component.css']
})
export class OtherprofileComponent {

  constructor(private visibilityService:VisibilityService) {
  }

}
