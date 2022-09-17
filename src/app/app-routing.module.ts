import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComentariosComponent } from './components/listar-comentarios/listar-comentarios.component';
import { AgregarEditarComentarioComponent } from './components/agregar-editar-comentario/agregar-editar-comentario.component';
import { VerComentariosComponent } from './components/ver-comentarios/ver-comentarios.component';

const routes=[
  {path:'', component:ListarComentariosComponent},
  {path:'add', component:AgregarEditarComentarioComponent},
  {path:'editar/:id', component:AgregarEditarComentarioComponent},
  {path:'visualizar/id', component:VerComentariosComponent},
  {path:'**', redirecTo:'', pathMatch:'full'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
