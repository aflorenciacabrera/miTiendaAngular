import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http';
import { ProductoModel } from '../models/producto.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductoService {

  public url: string;
  public identity: any;
  public token: any;

  constructor( public http: HttpClient) {
    this.url = 'http://127.0.0.1:8000/api';
  }

  pruebas(){
    return "Servicio de Producto";
  }

  create(token, producto:ProductoModel): Observable<any>{
    console.log('servicio producto', producto);
    // let json = JSON.stringify(producto); 
    // let params = "json="+json;
    // console.log('servicio producto 2', params);

    let headers = new HttpHeaders()
    // .set('Content-Type', 'application/x-www-form-urlencoded')
    .set('Authorization', token);
    
    // return this.http.post( this.url+'/producto/crear',params,{headers} );
    const formData = new FormData();
    formData.append('titulo', producto.titulo);
    formData.append('categoria', producto.categoria);
    formData.append('precio', producto.precio);
    formData.append('descripcion', producto.descripcion);
    formData.append('disponible', producto.disponible);
    formData.append('imagenProducto', producto.imagenProducto);
  

    return this.http.post<any>(this.url+'/producto/crear', formData,{headers});
  }

  getGaleria() {
    const urlGaleria = this.url + '/producto/galeria';
    return this.http.get(urlGaleria);
  }

}


