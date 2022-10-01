import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CV } from '../cv-model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Output()exportEvent=new EventEmitter;
  cv1:CV={
    name :"Kaouech", 
    firstName:"Haythem",
    job:"software Engenieer",
    url:"assets/profile.jpg"}
  cv2:CV={
    name :"Hellal", 
    firstName:"Mootaz",
    job:"software Engenieer",
    url:"assets/profile.jpg"}
  cv3:CV={
      name :"emna", 
      firstName:"chenouir",
      job:"software Engenieer",
      url:"assets/profile.jpg"}
      @Output() outputCV :CV={
        name :"", 
      firstName:"",
      job:"",
      url:""
      }
  constructor() { }
  

  ngOnInit(): void {
  }
  export(cv:CV){
    this.exportEvent.emit(cv);
    console.log("test");
  }
 

}
