import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import{articulos}from '../Models/articulo';
@Injectable({
  providedIn: 'root'
})
export class ServicioArticulosService {
  API_URL="http://localhost:3000/api/articulos";
  
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
    
    var URL='http://localhost:3000/api/uuario/'+IDU+'/articulos/'+ID;  
    return this.http.delete<[]>(URL);
  }
}
