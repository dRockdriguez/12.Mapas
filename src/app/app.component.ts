import { Component } from '@angular/core';
import { MapasService } from './services/mapas.service';
import { Marcador } from './interfaces/marcador.interface';

//https://angular-maps.com/api-docs/agm-core/directives/AgmMarker.html#dragEnd

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lat: number = 40.965205;
  lng: number = -5.664101;
  zoom: number = 13;
  draggable:string = "";

  marcadorSel:any = null;

  constructor(
    private _mapas:MapasService
  ){
    this._mapas.cargarMarcadores();
  }

  addMarker(evento){
    this._mapas.addMarker(evento);
  }

  clickMarcador(marcador:Marcador, i:number){
    console.log(marcador, i);
    this.marcadorSel = marcador;
    if(this.marcadorSel.draggable){
      this.draggable = "1";
    }
    else{
      this.draggable = "0";
    }

    marcador = this.marcadorSel;

  }

  marcadorArrastrado(marcador:Marcador, evento){
    console.log(marcador, evento);
    let lat = evento.coords.lat;
    let lon = evento.coords.lng;

    marcador.lat = lat;
    marcador.lon = lon;

    this._mapas.guardarMarcadores();
  }

  eliminarMarcador(i){
    this._mapas.borrarMarcador(i);
    this.marcadorSel = null;
  }

  cambiaDrag(){
    console.log(this.draggable)
    if(this.draggable == "1"){
      this.marcadorSel.draggable = true;
    }
    else{
      this.marcadorSel.draggable = false;
    }

    console.log(this.marcadorSel.draggable)

  }
}
