import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {VentasService} from '../../Servicios/ventas.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  constructor(public ventasService: VentasService,private router:Router,private route:ActivatedRoute) { }
    ID:any;
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
CANCEL(){
    
  this.ID=this.route.snapshot.paramMap.get('Uid')
    
  this.router.navigate(['user/'+this.ID+'/Articulos']);
}
}
