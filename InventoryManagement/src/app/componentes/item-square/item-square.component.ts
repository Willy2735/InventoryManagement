import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-item-square',
  templateUrl: './item-square.component.html',
  styleUrls: ['./item-square.component.css']
})
export class ItemSquareComponent implements OnInit {
  @Input()articulo:any;
  constructor() { }

  ngOnInit(): void {
  }

}
