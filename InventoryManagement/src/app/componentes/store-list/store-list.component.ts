import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import {VentasService} from '../../Servicios/ventas.service';

import{ventas}from '../../Models/ventas';
@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css']
})
export class StoreListComponent implements OnInit {

  constructor(public ventasService: VentasService,private router:Router,private route:ActivatedRoute) { }
  ID:any;
  ar:any =[];
  ngOnInit(): void {
  this.getVentas();
  }
  getVentas(){
    this.ID=this.route.snapshot.paramMap.get('Uid')
    this.ventasService.getVentasUser(this.ID).subscribe(
      res=>{
        
    this.ventasService.VENTAS=res;  
        
      }
    );
  }

  paginaVen(){
    
    this.ID=this.route.snapshot.paramMap.get('Uid')
    
    this.router.navigate(['user/'+this.ID+'/Ventas/Add']);
  }
}
