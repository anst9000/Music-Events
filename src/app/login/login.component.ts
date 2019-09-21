import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(private loginService: LoginService) {}

  ngOnInit() {}

  login() {
    this.loginService.LogIn(this.username, this.password);
    this.username = '';
    this.password = '';
  }

  cancel() {
    this.username = '';
    this.password = '';
  }
}
