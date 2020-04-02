import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    public url: string;
    public identity: any;
    public token: any;

  // crear nuevo usuario

  // login


  constructor( public http: HttpClient) {
    this.url = 'http://127.0.0.1:8000/api';
  }

  logout() {

  }

  login( usuario: UsuarioModel) {

  }

  nuevoUsuario( usuario: UsuarioModel) {
    const authData = {
      // constuccion del objeto
      // email: usuario.email,
      // password: usuario.password,

      // forma simplificada de la creación del objeto pero trae completo las propiedades
      ...usuario,
      getToken: true

    };
    const url = this.url + '/register';
    return this.http.post(url, authData //  `${this.url}/register` info que se manda al servidor por pos
     );
  }

 

  register(usuario: UsuarioModel): Observable<any> {
    const authData = {
      // constuccion del objeto
      // email: usuario.email,
      // password: usuario.password,

      // forma simplificada de la creación del objeto pero trae completo las propiedades
      ...usuario,
      getToken: true

    };
    const json = JSON.stringify(authData);
    const params = 'json=' + json;
    const url = this.url + '/register';
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post(url , params, {headers});
  }

  acceso(usuario: UsuarioModel, getToken): Observable<any> {
    console.log(getToken)
    usuario.getToken = getToken;
    // const authData = {
    //   // constuccion del objeto
    //   // email: usuario.email,
    //   // password: usuario.password,

    //   // forma simplificada de la creación del objeto pero trae completo las propiedades
    //   ...usuario,
    

    // };

    console.log(usuario);
    const json = JSON.stringify(usuario);
    const params = 'json=' + json;
    const url = this.url + '/login';
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post(url , params, {headers});
  }

  getIdentity() {
    const identity = JSON.parse(localStorage.getItem('identity'));

    if ( identity !== 'undefined') {
      this.identity = identity;
    } else {
      this.identity = null;
    }
    return this.identity;
  }

  getToken() {
    const token = localStorage.getItem('token');
    if (token !== 'undefined') {
      this.token = token;
    } else {
      this.token = null;
    }
    return this.token;
  }

}
