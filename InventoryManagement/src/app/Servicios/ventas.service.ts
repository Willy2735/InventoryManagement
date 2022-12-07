import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

import{ventas}from '../Models/ventas';
import { articulos } from '../Models/articulo';
@Injectable({
  providedIn: 'root'
})
export class VentasService {
  API_URL="http://localhost:3000/api/puntos_ventas";
  
  VENTAS:ventas []|undefined;
  ARTS:articulos[]|undefined;
  constructor(private http:HttpClient) { }
  getVentas(){
    return this.http.get<ventas[]>(this.API_URL);
  }
  getVentasUser(ID:string){
    
    var URL='http://localhost:3000/api/usuario/'+ID+'/Puntos_De_Venta'
    return this.http.get<[]>(URL);
  }
  getVentasID(ID:string){
    
    var URL='http://localhost:3000/api/puntos_ventas/'+ID;
    return this.http.get<ventas>(URL);
  }
  getVentasArt(ID:string){
    var URL='http://localhost:3000/api/articulos/'+ID+'/Puntos_De_Venta';
    return this.http.get<[]>(URL);
  }
  deleteVenta(IDU:string,ID:string){
    
    var URL='http://localhost:3000/api/usuario/'+IDU+'/Puntos_De_Venta/'+ID;  
    return this.http.delete<[]>(URL);
  }
  
  updateVenta(ID:string,NAME:String,DESCRIPCION:String,VENT:any[]){
    
    var URL='http://localhost:3000/api/puntos_ventas/'+ID
    return this.http.put<ventas>(URL,{
      "nombre":NAME,
      "Descripcion":DESCRIPCION,
      "puntos_ventas": VENT
    });
  }
  newVenta(NAME:String,DESCRIPCION:String,VENT:any[]){
    
    var URL='http://localhost:3000/api/puntos_ventas'
    return this.http.post<any>(URL,{
      "nombre":NAME,
      "Descripcion":DESCRIPCION,
      "puntos_ventas": VENT
    });
  }
  
  addVentasUser(ID:string,IDA:String){
      
    var URL='http://localhost:3000/api/usuario/'+ID+'/Puntos_De_Venta/'+IDA
    return this.http.post<[]>(URL,{});
  }
}
