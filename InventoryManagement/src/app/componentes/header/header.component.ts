import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute) { }
  ID:any;
  ngOnInit(): void {
  }
  
  paginaHome(){
    
    this.ID=this.route.snapshot.paramMap.get('Uid')
    
    this.router.navigate(['user/'+this.ID]);
  }
  paginaVen(){
    
    this.ID=this.route.snapshot.paramMap.get('Uid')
    
    this.router.navigate(['user/'+this.ID+'/Ventas']);
  }
  
  paginaArt(){
    
    this.ID=this.route.snapshot.paramMap.get('Uid')
    
    this.router.navigate(['user/'+this.ID+'/Articulos']);
  }
}//te
