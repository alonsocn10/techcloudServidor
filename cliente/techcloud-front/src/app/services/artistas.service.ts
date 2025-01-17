import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Artistas } from '../models/artistas';

@Injectable({
  providedIn: 'root'
})
export class ArtistasService {

  selectedArtista: Artistas;
  readonly URL = "http://localhost:3000/api/artistas"
  artistas: Artistas[] = [];
  constructor(public http: HttpClient) { 
    this.selectedArtista = new Artistas();
  }

  getArtistas() {

    return this.http.get(this.URL);
      
  }
  getArtistaId(_id: string) {

    return this.http.get(this.URL +'/'+ _id);
      
  }
  postArtistas(nombre: string , genero: string , descripcion:string, imagen: File ) {
    const fd = new FormData();
    fd.append('nombre', nombre);
    fd.append('genero', genero);
    fd.append('descripcion', descripcion);
    fd.append('imagen', imagen);

    return this.http.post(this.URL, fd);
      
  };
  putArtistas( _id: string, nombre: string , genero: string , descripcion:string, imagen: File ) {
    const fd = new FormData();
    fd.append('nombre', nombre);
    fd.append('genero', genero);
    fd.append('descripcion', descripcion);
    fd.append('imagen', imagen);

    return this.http.put(this.URL + '/' + _id, fd);
      
  };

  deleteArtistas(_id: string) {

    return this.http.delete(this.URL +'/'+_id);
      
  };}
