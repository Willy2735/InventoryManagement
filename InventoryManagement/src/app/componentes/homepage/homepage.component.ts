import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import {UsersService} from '../../Servicios/users.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(public userService: UsersService,private router:Router,private route:ActivatedRoute) { }
  ID:any;
  
  PASSWORD:String=""
  EMAIL:String=""
  IMG:String="../../../assets/imagenes/Screenshot 2022-11-25 175622.png"
  
  ngOnInit(): void {
    this.getINFO()
  }
  getINFO(){
      
    this.ID=this.route.snapshot.paramMap.get('Uid');
    this.userService.getUSERID(this.ID).subscribe(
      res=>{
       this.EMAIL= res.EMAIL;
      this.PASSWORD=res.PASSWORD;
      this.IMG=res.img_path;
      }
    )
  }
  ACTUALIZAR(form:NgForm){
      
    this.ID=this.route.snapshot.paramMap.get('Uid');
    this.userService.updateUSER(this.ID,this.EMAIL,this.PASSWORD).subscribe(
      res=>{
        console.log(res)
        
    this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>{

      this.router.navigate(['user/'+this.ID]);
    
    })
      }
    )
  }
}
