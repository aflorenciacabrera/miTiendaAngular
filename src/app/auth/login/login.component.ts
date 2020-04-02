import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { Form, NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   token: any;
   identity: any;
   usuario: UsuarioModel = new UsuarioModel();
   status="succes";
 

  constructor(
    private auth: AuthService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    // const user = this.auth.getIdentity();
    this.logout();
  }


  login(acceder: NgForm) {
    if (acceder.invalid) { return; }
    // console.log(acceder);
    this.auth.acceso(this.usuario, 'true').subscribe(
      resp => {
        // token
        console.log('con token');
        console.log(resp);
        if (resp.status !== 'error') {
          this.status = 'succes';
        this.token = resp;
        localStorage.setItem('token', this.token);
        // objeto de usuario identificado
        this.auth.acceso(this.usuario, 'false').subscribe(
          // tslint:disable-next-line:no-shadowed-variable
          resp => {
            console.log('sin token');
            console.log(resp);
            this.identity = resp;
            localStorage.setItem('identity', JSON.stringify(this.identity));
             // redirect
            this._router.navigate(['home']);

          },
          error => {
            console.log( error as any);
          }
        );
      } else {
        this.status = 'error';
      }
      },
      error => {
        console.log( error as any);
      }
    );
  }

  logout() {
    this._route.params.subscribe(params =>{
      const logout = +params['sure'] ;
      if (logout === 1) {
        localStorage.removeItem('identity');
        localStorage.removeItem('token');
        this.identity = null;
        this.token = null;

        // redirect
        this._router.navigate(['/']);
      }
    });
  }
}
