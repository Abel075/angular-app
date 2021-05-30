import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {

  formularioCreado!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.crearFormulario();
  }

  crearFormulario()
  {
    this.formularioCreado = this.formBuilder.group({
      nombre: ['Carmen', Validators.required], /* Validacion del nombre  */

      correo: ['',Validators.compose([
        Validators.required,Validators.email   /*  Validacion doble el correo*/
      ])],
      password: ['',Validators.compose([                 
        Validators.required,Validators.minLength(8)     /*  Validacion doble de contraseña  */
      ])]

    })
  }

  agregar()
  {
    console.log(this.formularioCreado.value);
    
  }
}
