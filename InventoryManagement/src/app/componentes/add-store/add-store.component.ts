import { Component, OnInit } from '@angular/core';

import {ServicioArticulosService} from '../../Servicios/servicio-articulos.service';

@Component({
  selector: 'app-add-store',
  templateUrl: './add-store.component.html',
  styleUrls: ['./add-store.component.css']
})
export class AddStoreComponent implements OnInit {

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
