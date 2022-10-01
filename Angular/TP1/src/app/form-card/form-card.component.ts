import { Component, OnInit } from '@angular/core';
import { CV } from '../cv-model';

@Component({
  selector: 'app-form-card',
  templateUrl: './form-card.component.html',
  styleUrls: ['./form-card.component.css']
})
export class FormCardComponent implements OnInit {
 
 newcv:CV={
  name :"", 
  firstName:"",
   job:"",
  url:""}
  constructor() { }

  ngOnInit(): void {
  }

}
