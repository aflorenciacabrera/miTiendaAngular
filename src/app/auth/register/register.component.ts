import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import swal from 'bootstrap-sweetalert';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  status: string;
  usuario: UsuarioModel;

  usuarioLimpiar = {
    name: '',
    email: '',
    password: '',
  };
  constructor( private auth: AuthService) { }

  ngOnInit() {
    this.usuario = new UsuarioModel();
  }

  onSubmit(registro: NgForm) {
    if (registro.invalid) { return; }

    //  this.auth.nuevoUsuario(this.usuario).subscribe( resp => {
    //    console.log(resp);
    this.usuario.rol = 'cliente';
    console.log(this.usuario);
   
    this.auth.register(this.usuario).subscribe(
      resp => {
        this.status = resp.status;
        if (this.status == 'success') {
          // Vaciar el formulario
          //  this.usuario = this.usuarioLimpiar;
          registro.reset();
         

          console.log(resp.message);
          
        } else {

          this.status = 'error';
        
          console.log(resp.error.message);
        }
      },
      error =>{
         this.status = 'error';
      
        console.log(error.error.message);
      });

    }
  }


