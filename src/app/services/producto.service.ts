import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ProductoModel} from "../models/producto.model";
@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  public url: string;
  public identity: any;
  public token: any;

  constructor( 
    public http: HttpClient,
    
    ) {
    this.url = 'http://127.0.0.1:8000/api';
  }



  guardar(producto:ProductoModel)
  {
    console.log(producto);
  }
}
