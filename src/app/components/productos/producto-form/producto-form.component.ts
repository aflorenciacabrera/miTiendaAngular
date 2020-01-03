import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent implements OnInit {
  productos = {
    titulo: '',
    tipo: '',
    categoria: '',
    descripcion: '',
    imagen: ''
  }
  constructor() { }

  ngOnInit() {
   
  }

  guardarProduct(forma: NgForm) {
    console.log('ngForm', forma);

  }

}
