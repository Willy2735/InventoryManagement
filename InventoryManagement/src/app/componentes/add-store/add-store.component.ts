import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {ServicioArticulosService} from '../../Servicios/servicio-articulos.service';

@Component({
  selector: 'app-add-store',
  templateUrl: './add-store.component.html',
  styleUrls: ['./add-store.component.css']
})
export class AddStoreComponent implements OnInit {

  constructor(public articuloService: ServicioArticulosService,private router:Router,private route:ActivatedRoute) { }
  ID:any;
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
  
  CANCEL(){
    
    this.ID=this.route.snapshot.paramMap.get('Uid')
    
    this.router.navigate(['user/'+this.ID+'/Ventas']);
  }
}
