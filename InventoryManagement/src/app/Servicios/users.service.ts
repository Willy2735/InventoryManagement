import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

import{user}from '../Models/user';

import{userC}from '../Models/userC';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  API_URL="http://localhost:3000/api/usuario";
  
  USUARIOS:user []|undefined;
  constructor(private http:HttpClient) { }
  getUsers(){
    return this.http.get<user[]>(this.API_URL);
  }
  getUSERID(ID:any){
    
    var URL="http://localhost:3000/api/usuario/"+ID;
    return this.http.get<user>(URL);

  }
  getLogin(email:String,pass:String){
    var URL="http://localhost:3000/api/usuario/LOGIN";
    return this.http.post(URL,{
      "EMAIL":email,
      "PASSWORD":pass
    })
  }
  REGISTER(US:userC){
    var URL="http://localhost:3000/api/usuario";
    
    return this.http.post(URL,US)
  }
  updateUSER(ID:String,EMAIL:String,PASSWORD:String){
    
    var URL="http://localhost:3000/api/usuario/"+ID;
    
    return this.http.put(URL,{
      "EMAIL":EMAIL,
      "PASSWORD":PASSWORD
    })
  }
}
