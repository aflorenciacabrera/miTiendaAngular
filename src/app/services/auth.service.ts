import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private url = 'http://127.0.0.1:8000/api';

  // crear nuevo usuario

  // login


  constructor( private http: HttpClient) { }

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

}
