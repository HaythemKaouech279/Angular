import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-miniword',
  templateUrl: './miniword.component.html',

  styleUrls: ['./miniword.component.css']
})
export class MiniwordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   myfont :string="arial";
   mysize : string = "50";
   mycolor:string="blue";

}
