import { Component, OnInit } from '@angular/core';
import { CV } from '../cv-model';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  constructor() { }
  displaycv:CV={
    name:"",
    firstName:"",
    job:"",
    url:""
    }
  

  ngOnInit(): void {
  }
  exporthandler(event:CV){
    this.displaycv.firstName=event.firstName;
    this.displaycv.name=event.name;
    this.displaycv.job=event.job;
    this.displaycv.url=event.url;
  }
 
}
