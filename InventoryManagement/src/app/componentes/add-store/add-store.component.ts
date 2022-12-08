import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VentasService } from 'src/app/Servicios/ventas.service';
import { NgForm } from '@angular/forms';
import {ServicioArticulosService} from '../../Servicios/servicio-articulos.service';

@Component({
  selector: 'app-add-store',
  templateUrl: './add-store.component.html',
  styleUrls: ['./add-store.component.css']
})
export class AddStoreComponent implements OnInit {

  constructor(public ventasService: VentasService,public articuloService: ServicioArticulosService,private router:Router,private route:ActivatedRoute) { }
  ID:any;
  
  NAME:String="";
  DESCRIPCION:String="";
  
  ar:any =[];
  ngOnInit(): void {
  this.getArticulos();
  }
  
  IDV(ID:any){
    return ID._id
  }
  getArticulos(){
    
    this.ID=this.route.snapshot.paramMap.get('Uid')
    this.articuloService.getArticulosUser(this.ID).subscribe(
      res=>{
        
    this.articuloService.art=res;
       
      }
    );
  }
  
  CANCEL(){
    
    this.ID=this.route.snapshot.paramMap.get('Uid')
    
    this.router.navigate(['user/'+this.ID+'/Ventas']);
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

 this.ventasService.newVenta(this.NAME,this.DESCRIPCION,this.ar).subscribe(
  res=>{
    
    this.articuloService.addVentaArticulo("1",res.nuevoArticulo._id,res.nuevoArticulo.articulos).subscribe(
      res=>{
        
    console.log(res);   
    this.ventasService.addVentasUser(this.ID,res._id).subscribe(
      res=>{
          
this.ID=this.route.snapshot.paramMap.get('Uid');
 this.router.navigate(['user/'+this.ID+'/Ventas']);
      }
    );
      }
    )
  }
);
    
    
}
}
