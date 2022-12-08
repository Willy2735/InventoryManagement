import { Component, OnInit,Input} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VentasService } from 'src/app/Servicios/ventas.service';

@Component({
  selector: 'app-store-square',
  templateUrl: './store-square.component.html',
  styleUrls: ['./store-square.component.css']
})
export class StoreSquareComponent implements OnInit {
  @Input()venta:any;
  constructor(public ventasService: VentasService,private router:Router,private route:ActivatedRoute) { }
  ID:any;
  ngOnInit(): void {
  }

  EDIT(){
    
    this.ID=this.route.snapshot.paramMap.get('Uid')
    
    this.router.navigate(['user/'+this.ID+'/Ventas/Edit/'+this.venta._id]);
  }
  BORRAR(){

    if(confirm("¿Seguro que quieres borrar "+this.venta.nombre+"?")){
      this.ventasService.removeArticuloVenta(this.venta._id).subscribe(
        res=>{
            
    this.ID=this.route.snapshot.paramMap.get('Uid')
    this.ventasService.deleteVenta(this.ID,this.venta._id).subscribe(
      res=>{
        console.log(res);
      
    this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>{

      this.router.navigate(['user/'+this.ID+'/Ventas']);
    
    })
      }
    );
        }
      )
      
    }
    }
}
