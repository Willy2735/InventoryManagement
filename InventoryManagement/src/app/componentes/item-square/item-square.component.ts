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

  }
  BORRAR(){

    if(confirm("¿Seguro que quieres borrar "+this.articulo.nombre+"?")){
      
    this.ID=this.route.snapshot.paramMap.get('Uid')
      this.articuloService.deleteArticulo(this.ID,this.articulo.id)
      
    
    this.router.navigate(['user/'+this.ID+'/Articulos']);
    }
    }
}
