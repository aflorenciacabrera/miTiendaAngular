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
    categoria: null,
    precio: null,
    descripcion: null,
    imagen: null
  };
  constructor() { }

  ngOnInit() {

  }

  guardarProduct(forma: NgForm) {
    console.log('ngForm', forma);
    console.log('productos por defecto', this.producto);
    console.log('productos', forma.value);

  }

}
