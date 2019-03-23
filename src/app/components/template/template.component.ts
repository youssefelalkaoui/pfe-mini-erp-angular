import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  type: string;
  connected: string;
  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.authService.type.subscribe(value => this.type = value);
    this.authService.connected.subscribe(value => this.connected = value);
  }

  logout(): void {
    this.authService.logout();
  }
}
