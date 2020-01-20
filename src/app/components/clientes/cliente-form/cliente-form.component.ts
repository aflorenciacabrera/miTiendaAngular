import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  clienteForm: FormGroup;
  usuario: any = {
      nombre: null,
      apellido: null,
      correo: null,
      telefono: null,
  };

  constructor() {
    this.clienteForm = new FormGroup({
      nombre: new FormControl(null, [Validators.required, this.validarNombre]),
      apellido : new FormControl(null, Validators.required),
      correo : new FormControl(null, [ Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      telefono : new FormControl(null,  [Validators.required, Validators.min(0)])
    });

    // *** para setear los valores por defecto
    // this.clienteForm.setValue(this.usuario);
    // para setear con valores
    // this.clienteForm.setValue({
    //     nombre: 'Flor',
    //     apellido: 'Cabrera',
    //     correo: 'Flor@gmail.com',
    //     telefono: '3795053426',
    // });

  }

  ngOnInit() {

  }


  guardarForm() {
    console.log(this.clienteForm.value);
    console.log(this.clienteForm);

    // **** limpiar el formulario
    this.clienteForm.reset(this.usuario);
    // this.clienteForm.reset({
    //   usuario:  {
    //     nombre: '',
    //     apellido: '',
    //     correo: '',
    //     telefono: '',
    //   }
    // });
  }
  // *** crear bandera de error
  validarNombre(control: FormControl): { [s: string]: boolean} {
    if (control.value === 'Flor') {
      return {

        validarNombre: true
      };
    }
    return null;
  }

}
