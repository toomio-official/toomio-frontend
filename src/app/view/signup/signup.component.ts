import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

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
    private router: Router,
    private toastr: ToastrService

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
      // this.loginService.userSignIn(form.form.value).subscribe(
      //   (res: any) => {
      //     this.signUpData = res;
      //     this.router.navigate(['/admin/home-page']);
      //   },
      //   (error: any) => {
      //     console.error('Error during sign up:', error);
      //   }
      // );
    }
  }

  crateUser(form:any){
    let obj = {
      firstName : form.form.value.firstName,
      lastName: form.form.value.lastName,
      email : form.form.value.email,
      password: form.form.value.password,
      profilePicture: form.form.value.profilePicture,
      gender: form.form.value.gender,
      birthDate: form.form.value.birthDate,
    }
    debugger
    this.loginService.userSignIn(obj).subscribe(
      (res: any) => {
        this.signUpData = res;
        debugger
        this.toastr.success('Sign Up successful!', 'Success');

        this.router.navigate(['/admin/home-page']);
      },
      (error: any) => {
        console.error('Error during sign up:', error);
        if (error.error && error.error.message) {
          this.toastr.error(error.error.message, 'Error');
        } else {
          this.toastr.error('An unexpected error occurred. Please try again.', 'Error');
        }
      }
    );
  }
}
