import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VentasService } from 'src/app/Servicios/ventas.service';

import {ServicioArticulosService} from '../../Servicios/servicio-articulos.service';
import{articulos}from '../../Models/articulo';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-edit-store',
  templateUrl: './edit-store.component.html',
  styleUrls: ['./edit-store.component.css']
})
export class EditStoreComponent implements OnInit {

  @Output('ngInit') initEvent: EventEmitter<any> = new EventEmitter();
  constructor(public ventasService: VentasService,public articuloService: ServicioArticulosService,private router:Router,private route:ActivatedRoute) { }
  ID:any;
  IDv:any;
  ar:any=[];
  STORE:any;
  NAME:String="";
  DESCRIPCION:String="";
  IMAG:String="";
  ngOnInit(): void {
  this.getArticulos();
  
  this.initEvent.emit(this.setITEM())
  }
  
  setITEM(){
    this.IDv=this.route.snapshot.paramMap.get('IDA');
    
    this.ventasService.getVentasID(this.IDv).subscribe(
      res=>{
        this.STORE=res;
        this.NAME=this.STORE.nombre;
        this.DESCRIPCION=this.STORE.Descripcion;
        
        this.ventasService.ARTS=this.STORE.articulos;
        
    this.ar=this.ventasService.ARTS
        
      
      }
    );
    
  }
  IDV(ID:any){
    return ID._id
  }
  CHECKS(ar:any,ID:any){
  
    for(var element of ar){
    
      
      if(element==ID._id){
        return true;
          }
      
    }
    return false;
    
    
  }
  getArticulos(){

    this.ID=this.route.snapshot.paramMap.get('Uid')
    this.articuloService.getArticulosUser(this.ID).subscribe(
      res=>{
      
    this.articuloService.art=res; 
      }
    );
  }
  
ACTUALIZAR(form:NgForm){
  
  this.IDv=this.route.snapshot.paramMap.get('IDA');
  this.ar=[];
  
  var elements = (<HTMLInputElement[]><any>document.getElementsByName("CHEE"));
  
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].type == "checkbox") {
        if (elements[i].checked) {
            this.ar.push(elements[i].id)
        }
    }
}

console.log(this.ar);
this.ventasService.updateVenta(this.IDv,this.NAME,this.DESCRIPCION,this.ar).subscribe(
  res=>{
    
  }
)

this.ID=this.route.snapshot.paramMap.get('Uid')
    
this.router.navigate(['user/'+this.ID+'/Ventas']);
}

CANCEL(){
    
  this.ID=this.route.snapshot.paramMap.get('Uid')
    
  this.router.navigate(['user/'+this.ID+'/Ventas']);
}
}
