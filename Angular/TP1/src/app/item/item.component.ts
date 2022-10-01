import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CV } from '../cv-model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  
  @Input()inputcv:CV | undefined;
  
  constructor() { }

  ngOnInit(): void {
  }
  export(){

  }

}
