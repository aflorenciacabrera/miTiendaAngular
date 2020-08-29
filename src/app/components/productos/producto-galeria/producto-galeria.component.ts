import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { ProductoModel } from 'src/app/models/producto.model';


@Component({
  selector: 'app-producto-galeria',
  templateUrl: './producto-galeria.component.html',
  styleUrls: ['./producto-galeria.component.css']
})
export class ProductoGaleriaComponent implements OnInit {
  // producto : ProductoModel = new ProductoModel();
  producto:[];
  url ="http://127.0.0.1:8000/storage/";
 
  constructor(
    private _productoService: ProductoService,
  ) { }

  ngOnInit() {
     this.cargarGaleria(); 
  }

  cargarGaleria(){
    this._productoService.getGaleria().subscribe(
      (result: any) => {
        this.producto = result;
        
        console.log(this.producto);
        
      }
    )}

    
}
