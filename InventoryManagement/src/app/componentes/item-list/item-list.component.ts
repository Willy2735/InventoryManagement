import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {ServicioArticulosService} from '../../Servicios/servicio-articulos.service';
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  constructor(public articuloService: ServicioArticulosService,private router:Router,private route:ActivatedRoute) { }
  ID:any;
  
  ar:any =[];
  ngOnInit(): void {
  this.getArticulos();
  }
  getArticulos(){
    
    this.ID=this.route.snapshot.paramMap.get('Uid')
    this.articuloService.getArticulosUser(this.ID).subscribe(
      res=>{
        var array=res
        
        array.forEach(element => {
          console.log(element);
          this.articuloService.getArticuloID(element).subscribe(
            res =>{
              
          this.ar.push(res);
            }
          );
        });
       
      }
    );
    this.articuloService.art=this.ar;
  }
  paginaArt(){
    
    this.ID=this.route.snapshot.paramMap.get('Uid')
    
    this.router.navigate(['user/'+this.ID+'/Articulos/Add']);
  }
}
