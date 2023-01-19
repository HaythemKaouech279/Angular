import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
  color: string="red";

  constructor(private router:ActivatedRoute) { 
    router.params.subscribe(params=>{this.color=params['color']})
  }
  setDefaultColor(){
    this.color="white";
   }

  ngOnInit(): void {
  }

}
