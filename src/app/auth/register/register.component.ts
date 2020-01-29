import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  usuario: UsuarioModel;
  constructor() { }

  ngOnInit() {
    this.usuario = new UsuarioModel();
  }

  onSubmit(registro: NgForm) {
    // if (registro.invalid) { return; }

    console.log('Formulario enviado');
    console.log(this.usuario);
    console.log(registro);
    }
  }


