import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CV } from '../cv-model';
import { EmbaucheService} from '../embauche.service';

@Component({
  selector: 'app-carte-visite',
  templateUrl: './carte-visite.component.html',
  styleUrls: ['./carte-visite.component.css']
})
export class CarteVisiteComponent implements OnInit {
  @Output()exportEvent=new EventEmitter;
  @Input() cv:CV|null=null;
  @Output() ecv:CV|null=null;
  
  constructor(private embacheService:EmbaucheService,private router:Router) { }
  embaucher():void{
    if(this.cv){
    this.embacheService.embauchercv({...this.cv}as CV);}
    console.log(this.embacheService.embaucheListe());
    
  }
  details():void{
    
    this.router.navigate(["cv/"+this.cv?.id]);
  }
  ngOnInit(): void {

  }

}
