import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-store-square',
  templateUrl: './store-square.component.html',
  styleUrls: ['./store-square.component.css']
})
export class StoreSquareComponent implements OnInit {
  @Input()venta:any;
  constructor() { }

  ngOnInit(): void {
  }

}
