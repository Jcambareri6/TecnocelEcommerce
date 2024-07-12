import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaCelusComponent } from './lista-celus/lista-celus.component';
import {ContactoComponent} from './contacto/contacto.component'


const routes: Routes = [
  {path:'' ,redirectTo:'celulares',pathMatch:"full"},
  {path:'celulares',
   component: ListaCelusComponent},
  { path: 'celulares/:idMarca', component: ListaCelusComponent },
  {path:'contacto', component:ContactoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
