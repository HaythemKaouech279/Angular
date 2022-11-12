import { EventEmitter, Injectable, Output } from '@angular/core';
import { CV } from './cv-model';

@Injectable({
  providedIn: 'root'
})
export class CvService {
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
    url:"assets/marco.jpg"}
  cv3:CV={
      name :"Cheniour", 
      firstName:"Emna",
      job:"software Engenieer",
      url:"assets/emna.jpg"}
      cv4:CV={
        name :"test", 
        firstName:"test",
        job:"test",
        url:"   "}
     
      
  constructor() { }
  data():CV[]{
    return[this.cv1,this.cv2,this.cv3,this.cv4];
  }
}
