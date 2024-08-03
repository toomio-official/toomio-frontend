import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email: any;
  password: any;
  firstName: any;
  lastName: any;
  profilePicture: any;
  gender: any;
  birthDate: any;
  confirmPassword: string = '';
  userName: any;
  passwordsDoNotMatch: boolean = false;
  signUpData: any;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  checkPasswords() {
    this.passwordsDoNotMatch = this.password !== this.confirmPassword;
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.profilePicture = event.target.files[0];
    }
  }


  removeFile(fileInput: any) {
    this.profilePicture = null;
    fileInput.value = '';

  }

  onSubmit(form: any) {
    if (form.valid && !this.passwordsDoNotMatch) {
      const formData = new FormData();
      formData.append('name', this.firstName);
      formData.append('username', this.userName);
      formData.append('email', this.email);
      formData.append('password', this.password);
      formData.append('dateOfBirth', this.birthDate);
      if (this.profilePicture) {
        formData.append('profilePicture', this.profilePicture);
      }
debugger
      this.loginService.userSignIn(form.form.value).subscribe(
        (res: any) => {
          this.signUpData = res;
          this.router.navigate(['/admin/home-page']);
        },
        (error: any) => {
          console.error('Error during sign up:', error);
        }
      );
    }
  }
}
