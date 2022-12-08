import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import{articulos}from '../Models/articulo';
  
import{ventas}from '../Models/ventas';
@Injectable({
  providedIn: 'root'
})
export class ServicioArticulosService {
  API_URL="http://localhost:3000/api/articulos";
  VENTS:ventas []|undefined;
  art:articulos []|undefined;
  constructor(private http:HttpClient) { }
  getArticulos(){
    return this.http.get<articulos[]>(this.API_URL);
  }
  getArticuloID(ID:string){
    var URL='http://localhost:3000/api/articulos/'+ID
    return this.http.get<articulos>(URL);
  }
  getArticulosUser(ID:string){
      
    var URL='http://localhost:3000/api/usuario/'+ID+'/articulos'
    return this.http.get<[]>(URL);
  }
  
  deleteArticulo(IDU:string,ID:string){
    
    var URL='http://localhost:3000/api/usuario/'+IDU+'/articulos/'+ID;  
    return this.http.delete<[]>(URL);
  }
  updateArticulo(ID:string,NAME:String,DESCRIPCION:String,PRECIO:String,CANTIDAD:String,TIPOART:String,IMG:String,VENT:any[]){
    
    var URL='http://localhost:3000/api/articulos/'+ID
    return this.http.put<articulos>(URL,{
      "nombre":NAME,
      "Descripcion":DESCRIPCION,
      "Precio":PRECIO,
      "Cantidad":CANTIDAD,
      "Tipo_Articulo":TIPOART,
      "img_path": IMG,
      "puntos_ventas": VENT
    });
  }
  newArticulo(NAME:String,DESCRIPCION:String,PRECIO:String,CANTIDAD:String,TIPOART:String,VENT:any[]){
    
    var URL='http://localhost:3000/api/articulos'
    return this.http.post<any>(URL,{
      "nombre":NAME,
      "Descripcion":DESCRIPCION,
      "Precio":PRECIO,
      "Cantidad":CANTIDAD,
      "Tipo_Articulo":TIPOART,
      "puntos_ventas": VENT
    });
  }
  
  addArticulosUser(ID:string,IDA:String){
      
    var URL='http://localhost:3000/api/usuario/'+ID+'/articulos/'+IDA
    return this.http.post<[]>(URL,{});
  }
  
  addVentaArticulo(IDV:string,IDA:string,ART:any[]){
    
    var URL='http://localhost:3000/api/articulos/'+IDV+'/Puntos_De_Venta/'+IDA;  
    return this.http.post<any>(URL,{
      "ARTS":ART
    });
  }
  
  removeVentaArticulo(IDV:string){
    
    var URL='http://localhost:3000/api/articulos/'+IDV+'/Puntos_De_Venta';  
    return this.http.delete<any>(URL);
  }

}
