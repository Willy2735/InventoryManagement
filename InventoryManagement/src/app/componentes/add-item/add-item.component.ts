import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ServicioArticulosService } from 'src/app/Servicios/servicio-articulos.service';

import {VentasService} from '../../Servicios/ventas.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  constructor(public ventasService: VentasService,public articuloService: ServicioArticulosService,private router:Router,private route:ActivatedRoute) { }
    ID:any;
    ARTICULO:any;
    NAME:String="";
    DESCRIPCION:String="";
    PRECIO:String="";
    CANTIDAD:String ="";
    TIPOART:String="";
    IMAG:String="";
  ar:any =[];
  ngOnInit(): void {
    
  this.getVentas();
  }
  
  IDV(ID:any){
    return ID._id
  }
  getVentas(){
    
    this.ID=this.route.snapshot.paramMap.get('Uid')
    this.ventasService.getVentasUser(this.ID).subscribe(
      res=>{
        
    this.ventasService.VENTAS=res;  
      }
    );
  
}
ADD(form:NgForm){
  this.ar=[];
this.ID=this.route.snapshot.paramMap.get('Uid');
  
  var elements = (<HTMLInputElement[]><any>document.getElementsByName("CHEE"));
  
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].type == "checkbox") {
        if (elements[i].checked) {
            this.ar.push(elements[i].id);
        }
    }
}

 this.articuloService.newArticulo(this.NAME,this.DESCRIPCION,this.PRECIO,this.CANTIDAD,this.TIPOART,this.ar).subscribe(
  res=>{
    
    this.articuloService.addArticulosUser(this.ID,res.nuevoArticulo._id).subscribe(
      res=>{
          console.log(res);
          
this.ID=this.route.snapshot.paramMap.get('Uid');
 this.router.navigate(['user/'+this.ID+'/Articulos']);
      }
    );
  }
);
    
    
}
CANCEL(){
    
  this.ID=this.route.snapshot.paramMap.get('Uid')
    
  this.router.navigate(['user/'+this.ID+'/Articulos']);
}
}
