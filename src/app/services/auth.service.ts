import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    public url: string;

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

}
