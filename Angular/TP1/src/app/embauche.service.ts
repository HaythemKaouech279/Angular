import { Injectable } from '@angular/core';
import { CV } from './cv-model';
import { ListComponent } from './list/list.component';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
 private cvs:CV[]=[];
  embaucheListe():CV[]{
    return this.cvs;
  }
  embauchercv(cv:CV):void{
    if(this.cvs.indexOf(cv)<0){
    this.cvs.push(cv);
    console.log();
  }
  }
  constructor() { }
}
