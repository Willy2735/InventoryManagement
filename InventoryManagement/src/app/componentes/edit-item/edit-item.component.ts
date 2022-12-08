import { Directive,Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Router, ActivatedRoute, GuardsCheckStart } from '@angular/router';
import { ServicioArticulosService } from 'src/app/Servicios/servicio-articulos.service';
import {VentasService} from '../../Servicios/ventas.service';

import{articulos}from '../../Models/articulo';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  @Output('ngInit') initEvent: EventEmitter<any> = new EventEmitter();
  constructor(public ventasService: VentasService,public articuloService: ServicioArticulosService,private router:Router,private route:ActivatedRoute) { }
    IDA:any;
    ARTICULO:any;
    NAME:String="";
    DESCRIPCION:String="";
    PRECIO:String="";
    CANTIDAD:String ="";
    TIPOART:String="";
    IMAG:String="";
  ar:any =[];
  IDU:any;
  
  ngOnInit(): void {
  
  this.getVentas();
  
  this.initEvent.emit(this.setITEM())
  }
  ID(ID:any){
    return ID._id
  }
  CHECKS(ar:any,ID:any){
  
    for(var element of this.ar){
    
      if(element==ID._id){
        return true;
          }
      
    }
    return false;
    
    
  }
  setITEM(){
    this.IDA=this.route.snapshot.paramMap.get('IDA');
    
    this.articuloService.getArticuloID(this.IDA).subscribe(
      res=>{
        this.ARTICULO=res;
        this.NAME=this.ARTICULO.nombre;
        this.DESCRIPCION=this.ARTICULO.Descripcion;
        this.PRECIO=this.ARTICULO.Precio;
        this.CANTIDAD=this.ARTICULO.Cantidad;
        this.TIPOART=this.ARTICULO.Tipo_Articulo;
        this.IMAG=this.ARTICULO.img_path;
        this.articuloService.VENTS=this.ARTICULO.puntos_ventas;
        
    this.ar=this.articuloService.VENTS
        
      
      }
    );
    
  }
  getVentas(){
    
    this.IDU=this.route.snapshot.paramMap.get('Uid')
    this.ventasService.getVentasUser(this.IDU).subscribe(
      res=>{
        
   this.ventasService.VENTAS=res;  
       }
    );

}
ACTUALIZAR(form:NgForm){
  
  this.IDA=this.route.snapshot.paramMap.get('IDA');
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
this.articuloService.removeVentaArticulo(this.IDA).subscribe(
  res=>{
      
this.articuloService.updateArticulo(this.IDA,this.NAME,this.DESCRIPCION,this.PRECIO,this.CANTIDAD,this.TIPOART,this.IMAG,this.ar).subscribe(
  res=>{
    
    console.log(res) 
    this.ventasService.addArticuloVenta("1",this.IDA,res.puntos_ventas).subscribe(
        res=>{
             
          
        console.log(res);
    this.IDU=this.route.snapshot.paramMap.get('Uid')
        
    this.router.navigate(['user/'+this.IDU+'/Articulos']);
        }
)
  }
)
  }
)

}

CANCEL(){
    
  this.IDU=this.route.snapshot.paramMap.get('Uid')
    
  this.router.navigate(['user/'+this.IDU+'/Articulos']);
}

}


