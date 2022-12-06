import { Component, OnInit } from '@angular/core';

import {ServicioArticulosService} from '../../Servicios/servicio-articulos.service';

@Component({
  selector: 'app-edit-store',
  templateUrl: './edit-store.component.html',
  styleUrls: ['./edit-store.component.css']
})
export class EditStoreComponent implements OnInit {

  constructor(public articuloService: ServicioArticulosService) { }

  ngOnInit(): void {
  this.getArticulos();
  }
  getArticulos(){
    
    this.articuloService.getArticulos().subscribe(
      res=>{
        this.articuloService.art=res;
        console.log(this.articuloService.art);
      }
    );
  }
}
