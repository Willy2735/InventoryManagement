import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {UsersService} from '../../Servicios/users.service';

import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LOG_MG:any|undefined;
  constructor(public UsersService: UsersService,private router:Router) { }
  pass:String="";
  mail:String="";
  ngOnInit(): void {
    
  }
  
  login_p(form:NgForm){
    this.UsersService.getLogin(this.mail,this.pass).subscribe(
      
      res=>{
 
        this.LOG_MG=res;
      
        console.log(this.LOG_MG)
        if(this.LOG_MG.message=="LOGIN EXITOSO"){
          
    this.router.navigate(['user/'+this.LOG_MG.e._id+'/Ventas']);
        }
      } 
    );
  }
}
