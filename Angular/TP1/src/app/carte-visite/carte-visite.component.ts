import { Component, Input, OnInit } from '@angular/core';
import { CV } from '../cv-model';
import { EmbaucheService} from '../embauche.service';

@Component({
  selector: 'app-carte-visite',
  templateUrl: './carte-visite.component.html',
  styleUrls: ['./carte-visite.component.css']
})
export class CarteVisiteComponent implements OnInit {
  @Input() cv:CV|null=null;
  
  constructor(private embacheService:EmbaucheService) { }
  embaucher():void{
    if(this.cv){
    this.embacheService.embauchercv({...this.cv}as CV);}
    console.log(this.embacheService.embaucheListe());
    
  }
  ngOnInit(): void {

  }

}
