import { Component, OnInit } from '@angular/core';
import {ServicioArticulosService} from '../../Servicios/servicio-articulos.service';
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
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
