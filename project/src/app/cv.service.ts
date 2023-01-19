import { EventEmitter, Injectable, Output } from '@angular/core';
import { CV } from './cv-model';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  @Output() exportEvent = new EventEmitter;
  cv1: CV = {
    id: 0,
    name: "Kaouech",
    firstName: "Haythem",
    job: "software Engenieer",
    url: "assets/profile.jpg"
  }
  cv2: CV = {
    id: 1,
    name: "Hellal",
    firstName: "Mootaz",
    job: "software Engenieer",
    url: "assets/marco.jpg"
  }
  cv3: CV = {
    id: 2,
    name: "Cheniour",
    firstName: "Emna",
    job: "software Engenieer",
    url: "assets/emna.jpg"
  }
  cv4: CV = {
    id: 3,
    name: "test",
    firstName: "test",
    job: "test",
    url: "   "
  }
cvs:CV[]=[this.cv1,this.cv2,this.cv3,this.cv4];

  constructor() { }
  data(): CV[] {
    return this.cvs;
  }
  getCvByID(id: number): CV|undefined {
      const cv = this.cvs.find(cv=>{
        return cv.id==id;
      });
      return cv;
  }
  deleteCv(cv:CV):void{
    const index = this.cvs.indexOf(cv, 0);
if (index > -1) {
   this.cvs.splice(index, 1);
}

  }
  addCv(cv:CV):void{
    
    cv.id=this.cvs.length ;
    this.cvs.push(cv);
  }
}
