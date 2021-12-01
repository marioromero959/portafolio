import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('../app/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'contacto',
    loadChildren: () => import('../app/contacto/contacto.module').then(m => m.ContactoModule)
  },
  {
    path: 'sobremi',
    loadChildren: () => import('../app/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'proyectos',
    loadChildren: () => import('../app/proyectos/proyectos.module').then(m => m.ProyectosModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
