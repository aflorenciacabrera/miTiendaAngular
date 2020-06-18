import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {AuthService} from '../../../services/auth.service';
import {ProductoModel} from '../../../models/producto.model';
import { ProductoService } from 'src/app/services/producto.service';
@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css'],
  providers: [AuthService]
})
export class ProductoFormComponent implements OnInit {

    producto : ProductoModel = new ProductoModel();
    file:any;
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
    private producto_service: ProductoService
  ) {
    this.page_title = 'Alta producto'
   }

  ngOnInit() {

  }

  changeFile(e)
  {
    this.file = e.target.files;
    console.log(this.file);
    this.producto.imagenProducto = e.target.files[0];
  }

  guardarProduct(forma: NgForm) {
    console.group("Formulario");
   
    this.producto_service.guardar(this.producto);
    
    console.groupEnd();
  }


}
