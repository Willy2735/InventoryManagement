import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import {UsersService} from '../../Servicios/users.service';

import{userC}from '../../Models/userC';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  LOG_MG:any|undefined;
  constructor(public UsersService: UsersService,private router:Router) {

    this.us=new userC();
   }
  pass:String="";
  mail:String="";
  cpass:String="";
  us:userC;
  ngOnInit(): void {
    
  }
  
  register(form:NgForm){
    if(this.pass==this.cpass){
    
      this.us.EMAIL=this.mail;
      this.us.PASSWORD=this.pass;
      console.log(this.us);
      this.UsersService.REGISTER(this.us).subscribe(
      res=>{
        this.LOG_MG=res;
        console.log(this.LOG_MG[0])
        
      } 
    );
    
    this.router.navigate(['Ventas']);
  }else{
    alert("Los passwords no coinciden")
  }
  }
}
