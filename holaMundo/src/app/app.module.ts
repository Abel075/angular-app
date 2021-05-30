import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitulosComponent } from './titulos/titulos.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { PipesComponent } from './pipes/pipes.component';
import { ContinuaraPipe } from './continuara.pipe';
import { Pagina404Component } from './pagina404/pagina404.component';


@NgModule({
  declarations: [
    AppComponent,              /* Declaracion componenentes de la aplicacion*/
    TitulosComponent, DirectivaComponent, EjemploComponent, PipesComponent, ContinuaraPipe, Pagina404Component
  ],
  imports: [
    BrowserModule,             /* Importacion de pluggin que utiliza la aplicacion*/
    AppRoutingModule,
    FormsModule

  ],
  providers: [],               /* Creacion de servicios*/
  bootstrap: [AppComponent]
})
export class AppModule { }
