import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {AuthService} from '../../../services/auth.service';
import {ProductoModel} from '../../../models/producto.model';
@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css'],
  providers: [AuthService]
})
export class ProductoFormComponent implements OnInit {

    producto : ProductoModel = new ProductoModel();
    
  // producto = {
  //   titulo: null,
  //   categoria: '',
  //   precio: null,
  //   descripcion: null,
  //   imagenProducto: null
  // };

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

  public page_title: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private auth: AuthService,
  ) {
    this.page_title = 'Alta producto'
   }

  ngOnInit() {

  }

  guardarProduct(forma: NgForm) {
    console.log('ngForm', forma);
    console.log('productos por defecto', this.producto);
    console.log('productos', forma.value);

  }


}
