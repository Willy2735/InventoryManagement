import { Component, OnInit } from '@angular/core';

import {VentasService} from '../../Servicios/ventas.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
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
