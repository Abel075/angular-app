import { Component, OnInit } from '@angular/core';


interface Producto{
  nombre:string;
  stock:number;
  fabricante:string;
  fechaVence:Date;
  esImportante: boolean;
  textoGrande: boolean;
}

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.scss']
})
export class DirectivaComponent implements OnInit {

  cargando: boolean = true;
  nombres: Array<string> = ["Maria", "Johana", "Carlos", "Pedro"]
  pestana: string =''
  productos: Array<Producto> = [
    {
      nombre: 'Arroz',
      stock:15,
      fabricante: 'Distribuidor Industrial',
      fechaVence: new Date('04/15/2020'),
      esImportante: true,
      textoGrande: true
    },
    {
      nombre: 'Maiz',
      stock:49,
      fabricante: 'Distribuidor Industrial',
      fechaVence: new Date('04/15/2021'),
      esImportante: false,
      textoGrande: false
    },
    {
      nombre: 'Refresco',
      stock:300,
      fabricante: 'Pepsi',
      fechaVence: new Date('01/01/2024'),
      esImportante: true,
      textoGrande: false
    }
  ]
  mostrarCuadrado: boolean = false;
  

  constructor() { }

  ngOnInit(): void {

    setTimeout(() => {
      this.cargando = false;
    },5000);
  }

  alternar()
  {

    this.cargando = !this.cargando;
    
  }

  cambiarPestana(pestana: string){

    this.pestana = pestana;
  }

  alternarFondo(){
    this.mostrarCuadrado = !this.mostrarCuadrado;
  }

}
