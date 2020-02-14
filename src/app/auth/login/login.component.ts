import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { Form, NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  login(acceder: NgForm) {
    if (acceder.invalid) { return; }
    // console.log(acceder);
    this.auth.acceso(this.usuario, 'true').subscribe(
      resp => {
        // token
        console.log('con token');
        console.log(resp);
        // objeto de usuario identificado
        this.auth.acceso(this.usuario, 'false').subscribe(
          // tslint:disable-next-line:no-shadowed-variable
          resp => {
            console.log('sin token');
            console.log(resp);
          },
          error => {
            console.log( error as any);
          }
        );
      },
      error => {
        console.log( error as any);
      }
    );
  }
}
