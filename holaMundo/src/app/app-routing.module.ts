import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticuloComponent } from './articulo/articulo.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { Pagina404Component } from './pagina404/pagina404.component';
import { PipesComponent } from './pipes/pipes.component';
import { TitulosComponent } from './titulos/titulos.component';
import { AgregarUsuariosComponent } from './usuarios/agregar-usuarios/agregar-usuarios.component';
import { EditarUsuariosComponent } from './usuarios/editar-usuarios/editar-usuarios.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

// Rutas de la pagina/ path vacio es la principal
const routes: Routes = [
  {
    path: '', component: TitulosComponent
  },
  {
    path: 'pipes', component: PipesComponent
  },
  {
    path: 'ejemplo', component: EjemploComponent
  },
  {
    path: 'directiva', component: DirectivaComponent
  },
  {
    path: 'usuarios', component: UsuariosComponent, children: [
      {
        path: 'agregar', component: AgregarUsuariosComponent
      },
      {
        path: 'editar', component: EditarUsuariosComponent
      }
    ]
  },
  {
    path: 'articulo', component: ArticuloComponent
  },
  // pagina 404 si no encuantra nada el path con **
  {
    path: '**', component: Pagina404Component
  }

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
