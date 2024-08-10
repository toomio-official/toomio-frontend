import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(
    private loginService: LoginService,
    private router: Router,
    private toastr: ToastrService
  ) {
  }

  email:any;
  password:any;
  loginData:any

  ngOnInit(): void {
  }

  login() {
    let obj = {
      email: this.email,
      password: this.password,
    };
debugger
    this.loginService.userLogIn(obj).subscribe(
      (res: any) => {
        this.loginData = res;
        debugger
        localStorage.setItem('userEmail', this.email);
        this.toastr.success('Login successful!', 'Success');
        this.router.navigate(['/admin/home-page']);
      },
      (error: any) => {
        debugger
        console.error('Error during login:', error);
        if (error.error && Array.isArray(error.error.message)) {
          error.error.message.forEach((msg: string) => {
            this.toastr.error(msg, 'Error');
          });
        } else {
          this.toastr.error('An unexpected error occurred. Please try again.', 'Error');
        }
      }
    );
  }

  // login() {
  //   let obj = {
  //     email:this.email,
  //     password:this.password,
  //   }
  //   this.loginService.userLogIn(obj).subscribe((res:any)=>{
  //       this.loginData = res;
  //       localStorage.setItem('userEmail', this.email);
  //       debugger
  //
  //       this.router.navigate(['/admin/home-page']);
  //     },
  //     (error: any) => {
  //       console.error('Error during login:', error);
  //     })
  //   // localStorage.setItem('userEmail', this.email);
  //   // this.router.navigate(['/admin/home-page']);
  // }
}
