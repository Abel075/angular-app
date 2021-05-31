import { Component, OnInit } from '@angular/core';

interface Clientes {
  nombre: string;
  apellido:string;
  edad: number;

}

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  clientes: Array<Clientes> = new Array<Clientes>();

  constructor() { }

  ngOnInit(): void {

    this.clientes.push(
    //   {
    //   nombre: "Carmen",
    //   apellido: "Najera",
    //   edad: 34
    //  },
    //   {
    //   nombre: "Alejando",
    //   apellido: "Peineda",
    //   edad: 18
    //  }

    )
  }

  guardarCliente()
  {
    localStorage.setItem('clientes', JSON.stringify(this.clientes))
  }

  leerClientes()
  {
    // leer como texto
    // console.log(localStorage.getItem('clientes'));

    // console.log(JSON.parse(localStorage.getItem("clientes")))
  }

}
