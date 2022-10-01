import { Component, Input, OnInit } from '@angular/core';
import { CV } from '../cv-model';

@Component({
  selector: 'app-carte-visite',
  templateUrl: './carte-visite.component.html',
  styleUrls: ['./carte-visite.component.css']
})
export class CarteVisiteComponent implements OnInit {
  @Input() cv:CV={
    name:"",
    firstName:"",
    job:"",
    url:"",
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
