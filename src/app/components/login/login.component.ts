import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: string;
  password: string;
  constructor (public authService: AuthService) { }
  ngOnInit() {
  }
  onLogin() {
    this.authService.getUser(this.login, this.password);
  }
}
