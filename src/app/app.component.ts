import { Component, OnInit, DoCheck } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  identity: any;
  token: any;
  title = 'dulceado';
  constructor(private auth: AuthService) {
    this.identity = this.auth.getIdentity();
    this.token = this.auth.getToken();
  }

  ngOnInit() {
    console.log('cargado');
  }
  ngDoCheck() {
    // ejecuta cuando hay un cambio en la aplicacion
    this.identity = this.auth.getIdentity();
    this.token = this.auth.getToken();
  }
}
