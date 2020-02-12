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
    this.auth.register(this.usuario).subscribe(
      resp => {
        this.status = resp.status;
        if (this.status == 'success') {
          // Vaciar el formulario
          //  this.usuario = this.usuarioLimpiar;
          swal("Here's a message!")
          swal("Good job!", "You clicked the button!", "success");
          // swal('Exito!', 'El Usuario fue registrado Correctamente', 'success').then((resuta) => {
          //   if (resuta.value) {
          //     // Redirect
          //     registro.reset();

          //     // window.location.reload();

          //   }
          // });

          //  console.log(resp.message);
        } else {

          this.status = 'error';
          swal('Oops!', 'Este Usuario ya se encuentra registrado', 'error');
          console.log(resp.error.message);
        }
      },
      error =>{
        // this.status = 'error';
        swal('Oops!', 'Este Usuario ya se encuentra registrado', 'error');
        // console.log(error.error.message);
      });

    }
  }


