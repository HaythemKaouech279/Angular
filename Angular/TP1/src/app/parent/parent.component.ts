import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
  }
  newbackgroundcolor:string="";
  backgroundColor:string = "red";
  changebackground(value:any){
    this.newbackgroundcolor=value;
        
    }
    
    applychange(){
      document.body.style.backgroundColor=this.newbackgroundcolor;
    }
}

