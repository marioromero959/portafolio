import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectosRoutingModule } from './proyectos-routing.module';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    ProyectosComponent
  ],
  imports: [
    CommonModule,
    ProyectosRoutingModule,
    MaterialModule
  ]
})
export class ProyectosModule { }
