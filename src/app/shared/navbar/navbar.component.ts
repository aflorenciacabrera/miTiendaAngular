import { Component, OnInit, DoCheck } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, DoCheck {
    identity: any;
    token: any;
  constructor(private auth: AuthService) {
    this.identity = this.auth.getIdentity();
    this.token = this.auth.getToken();
  }

  ngOnInit() {
    console.log('cargado');
  }
  ngDoCheck() {
    this.identity = this.auth.getIdentity();
    this.token = this.auth.getToken();
  }
}
