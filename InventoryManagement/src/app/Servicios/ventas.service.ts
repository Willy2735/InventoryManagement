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
}
