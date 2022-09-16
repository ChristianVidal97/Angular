import { Component, OnInit } from '@angular/core';
import {Comentario} from 'src/app/interfaces/Comentarios';

@Component({
  selector: 'app-listar-comentarios',
  templateUrl: './listar-comentarios.component.html',
  styleUrls: ['./listar-comentarios.component.css']
})
export class ListarComentariosComponent implements OnInit {

listComentarios: Comentario [] =[
{
  titulo:'Developer',
  autor: 'Christian vidal',
  fechaCreacion: new Date(), 
  texto:'Ejemplo'
},
{
  titulo:'CyberSecurity',
  autor: 'yeison casas',
  fechaCreacion: new Date(), 
  texto:'datos'
},
{
  titulo:'Auditor',
  autor: 'Cesar agudelo',
  fechaCreacion: new Date(), 
  texto:'datos'
},
{
  titulo:'master',
  autor: 'maria rosero',
  fechaCreacion: new Date(), 
  texto:'datos'
},
{
  titulo:'director',
  autor: 'jorge agreda',
  fechaCreacion: new Date(), 
  texto:'datos'
}

]
  constructor() { }

  ngOnInit(): void {
  }

}
