import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CV } from '../cv-model';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Output()exportEvent=new EventEmitter;
  
      @Output() outputCV :CV={
        name :"", 
      firstName:"",
      job:"",
      url:""
      }
  constructor(private cvService : CvService) { }
  
  cvs:CV[]=this.cvService.data();
  ngOnInit(): void {
  }
  export(cv:CV){
    this.exportEvent.emit(cv);
    
   
  }
 

}
