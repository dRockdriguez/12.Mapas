import { Injectable } from '@angular/core';
import { Marcador } from '../interfaces/marcador.interface';

@Injectable()
export class MapasService {

  marcadores:Marcador[] = [];

  constructor() {
    let marcadorAux: Marcador = {
      lat: 40.965205,
      lon: -5.664101,
      titulo: 'Salamanca',
      draggable: true
    }

    this.marcadores.push(marcadorAux);
  }

  guardarMarcadores(){
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }

  cargarMarcadores(){
    if(localStorage.getItem('marcadores')){
        this.marcadores= JSON.parse(localStorage.getItem('marcadores'));
    }
    else{
      this.marcadores = [];
    }
  }

  addMarker(evento){
    console.log(evento)
    let marcadorAux: Marcador = {
      lat: evento.coords.lat,
      lon:   evento.coords.lng,
      titulo: 'Salamanca',
      draggable: true
    }

    this.marcadores.push(marcadorAux);
    this.guardarMarcadores();
  }

  borrarMarcador(i){
    this.marcadores.splice(i, 1);
    this.guardarMarcadores();
  }
}
