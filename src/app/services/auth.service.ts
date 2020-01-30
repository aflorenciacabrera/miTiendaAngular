import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private url = 'http://127.0.0.1:8000/api';

  // crear nuevo usuario

  // login


  constructor( private http: HttpClient) { }

  
}
