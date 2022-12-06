import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

import{ventas}from '../Models/ventas';
@Injectable({
  providedIn: 'root'
})
export class VentasService {
  API_URL="http://localhost:3000/api/puntos_ventas";
  
  VENTAS:ventas []|undefined;
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
}
