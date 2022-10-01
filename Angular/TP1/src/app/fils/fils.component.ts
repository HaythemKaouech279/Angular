import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {
@Input() backColor:string | undefined;
@Output() myFavColor = new EventEmitter();
     
  constructor() { }

  ngOnInit(): void {
    this.myFavColor.emit("blue");
  }
  

}
