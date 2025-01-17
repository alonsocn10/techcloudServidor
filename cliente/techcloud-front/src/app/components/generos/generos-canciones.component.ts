import { Component, OnInit } from '@angular/core';
import { Canciones } from 'src/app/models/canciones';
import { CancionesService } from 'src/app/services/canciones.service';
import { GenerosService } from 'src/app/services/generos.service';

@Component({
  selector: 'app-generos-canciones',
  templateUrl: './generos-canciones.component.html',
  styleUrls: ['./generos-canciones.component.css']
})
export class GenerosCancionesComponent implements OnInit {

  constructor(public generosService:GenerosService, public cancionesService:CancionesService) { }
  tipoGenero = localStorage.getItem('genero')
  ngOnInit(): void {
    this.getCanciones(this.tipoGenero);
  }
  
   getCanciones(tipo: string){
    this.generosService.getCanciones(tipo)
      .subscribe(res =>{
        this.cancionesService.canciones = res as Canciones[];
        console.log(res)
      }
        )
  }
}
