import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { ProductoModel } from 'src/app/models/producto.model';

@Component({
  selector: 'app-producto-catalogo',
  templateUrl: './producto-catalogo.component.html',
  styleUrls: ['./producto-catalogo.component.css']
})
export class ProductoCatalogoComponent implements OnInit {

  imagenes: Array <''>;
  url ="http://127.0.0.1:8000/images/";

  
  

  constructor(private _productoService: ProductoService,
    ) { }

  ngOnInit() {
    this.cargarImagenes();
    
  }


  cargarImagenes(){
    this._productoService.getImagenes().subscribe(
      (result: any) => {
        this.imagenes = result;
        
        console.log("imagen " + result);
        
      }
    )}
}
