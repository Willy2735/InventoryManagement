import { Component, OnInit } from '@angular/core';

import {VentasService} from '../../Servicios/ventas.service';
@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  constructor(public ventasService: VentasService) { }
    
  ngOnInit(): void {
    
  this.getVentas();
  }
  getVentas(){
    
    this.ventasService.getVentas().subscribe(
      res=>{
        this.ventasService.VENTAS=res;
        
        console.log(this.ventasService.VENTAS);
      }
    );

}

}
