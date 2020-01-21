import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent implements OnInit {
  producto = {
    titulo: null,
    categoria: '',
    precio: null,
    descripcion: null,
    imagenProducto: null
  };

  catego = [{
    id: '1',
    descripcion: '3D',
  },
  {
    id: '2',
    descripcion: 'Pascua',
  },
  {
    id: '3',
    descripcion: 'Reposteria',
  },
  {
    id: '4',
    descripcion: 'Comida',
  }];

  constructor() { }

  ngOnInit() {

  }

  guardarProduct(forma: NgForm) {
    console.log('ngForm', forma);
    console.log('productos por defecto', this.producto);
    console.log('productos', forma.value);

  }


}
