import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from '../service/app-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private appService: AppServiceService,private router: Router) {}
  username;
  password;
  isInvalid:boolean=false;
  ngOnInit(): void {}
  login() {
    console.log(this.username);
    console.log(this.password);
    let data = {
      username: this.username,
      password: this.password,
    };
    this.appService.submitLoginData(data).subscribe(
      (response) => {
        this.router.navigate(['/home']);
      },
      (err)=>{
        this.isInvalid=true;
      }
    );
  }
  email(username) {
    this.username = username.viewModel;
  }
  pass(password) {
    this.password = password.viewModel;
  }
}
