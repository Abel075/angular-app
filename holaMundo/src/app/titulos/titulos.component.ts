import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.scss']
})
export class TitulosComponent implements OnInit {

  // Variable para el html
  nombre:string = "Maria";
  apellido:string = "Gonzalez";

  // Objeto

  alumno: any = {
    nombre: "Carlos",
    apellido: "Pineda",
    edad: 32,
    
  }
  // carga de imagenes por variables en el html por medio de property binding
  imagen:string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQcAP10b_fOQmVYPKGqaiap7dyBvTOrZ0IsQ&usqp=CAU"

  // carga de un input predeterminado
  inputnuevo:string = "Hola soy un input"

  // prueba con FormsModule
  correo:string = "afaf"
  password:string = ""

  constructor() { }

  ngOnInit(): void {
  }

  
  
  // Funcion ingresar con click en html
  ingresar(){
    console.log();
    
    console.log(this.correo);
    console.log(this.password);
    
  }

  llamarAlert(){
    alert('Has hecho doble click')
  }

  escribirCorreo(){
    
    console.log(this.correo);
   
    
    
  }
  escribirModelo(){
    console.log(this.password);
    
  }

  


  

}
