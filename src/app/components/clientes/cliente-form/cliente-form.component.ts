import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  clienteForm: FormGroup;

  constructor() { 
    this.clienteForm = new FormGroup({
      nombre: new FormControl(null, [Validators.required]),
      apellido : new FormControl(null, Validators.required),
      correo : new FormControl(null, [ Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      telefono : new FormControl(null,  [Validators.required, Validators.pattern('0-9')])
    });
    
  }

  ngOnInit() {
   
  }


  guardarForm(){
    console.log(this.clienteForm.value);
    console.log(this.clienteForm);
  }
}
