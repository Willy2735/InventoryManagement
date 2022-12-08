import { Component, OnInit,Input} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServicioArticulosService } from 'src/app/Servicios/servicio-articulos.service';

@Component({
  selector: 'app-item-square',
  templateUrl: './item-square.component.html',
  styleUrls: ['./item-square.component.css']
})
export class ItemSquareComponent implements OnInit {
  @Input()articulo:any;
  ID:any;
  constructor(public articuloService: ServicioArticulosService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  EDIT(){
    
    this.ID=this.route.snapshot.paramMap.get('Uid')
    
    this.router.navigate(['user/'+this.ID+'/Articulos/Edit/'+this.articulo._id]);
  }
  BORRAR(){

    if(confirm("¿Seguro que quieres borrar "+this.articulo.nombre+"?")){
      
    this.ID=this.route.snapshot.paramMap.get('Uid')
    this.articuloService.removeVentaArticulo(this.articulo._id).subscribe(
      res=>{
          
      this.articuloService.deleteArticulo(this.ID,this.articulo._id).subscribe(
        res=>{
     
    this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>{

      this.router.navigate(['user/'+this.ID+'/Articulos']);
    
    })
        }
      );
      }
    )
      
    }
    }
}
