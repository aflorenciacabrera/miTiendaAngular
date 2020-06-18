import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {AuthService} from '../../../services/auth.service';
import {ProductoModel} from '../../../models/producto.model';
import {ProductoService} from '../../../services/producto.service';
@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css'],
  providers: [AuthService, ProductoService]
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
  loader:Boolean = false;
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
  public identity;
  public token;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private auth: AuthService,
    private _productoService: ProductoService,
  ) {

    this.page_title = 'Formulario de Carga de Productos';
    this.identity = this.auth.getIdentity();
    this.token = this.auth.getToken();

   }

  ngOnInit() {
      // Verificar si hay un usuario logeado
    if(this.identity == null && !this.identity.sub){
      this._router.navigate(["/login"]);
    }else{
      // crear objeto producto
      this.producto = new ProductoModel();    
    }
    
  }
  subiendoando(event){
    let img:any = event.target;
    if(img.files.length > 0){
      this.loader = true;
      let form = new FormData();
      form.append('file',img.files[0]);
      console.log(form);
    }
    
    //   let elemento = event.target;
    //   if(elemento.files.length > 0){
    //     this.producto.imagenProducto = elemento.files[0].name;
    //     console.log(this.producto.imagenProducto )
    // }
  }
  guardarProduct(forma: NgForm) {
    //  console.log('ngForm', forma);
     console.log('productos por defecto', this.producto);
    // console.log('productos', forma.value);
    // console.log(this._productoService.pruebas());
    console.log('token', this.token);
    this._productoService.create(this.token,this.producto).subscribe(
      response =>{
        console.log("entra"); 
        console.log(response);
        this.producto = response.producto;
      },
      error => {
        console.log("No entra error"); 
        console.log(<any>error);
      }
    )
  }
  
  


}
