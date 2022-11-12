import { Component, Input, OnInit } from '@angular/core';
import { CV } from '../cv-model';
import { EmbaucheService} from '../embauche.service';

@Component({
  selector: 'app-carte-visite',
  templateUrl: './carte-visite.component.html',
  styleUrls: ['./carte-visite.component.css']
})
export class CarteVisiteComponent implements OnInit {
  @Input() cv:CV={
    name:"",
    firstName:"",
    job:"",
    url:"",
  }
  
  constructor(private embacheService:EmbaucheService) { }
  embaucher():void{
    this.embacheService.embauchercv(this.cv);
    console.log(this.embacheService.embaucheListe());
  }
  ngOnInit(): void {
  }

}
