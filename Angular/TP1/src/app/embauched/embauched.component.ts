import { Component, OnInit } from '@angular/core';
import { CV } from '../cv-model';
import { EmbaucheService } from '../embauche.service';

@Component({
  selector: 'app-embauched',
  templateUrl: './embauched.component.html',
  styleUrls: ['./embauched.component.css']
})
export class EmbauchedComponent implements OnInit {
  
  constructor(private embaucheService:EmbaucheService) { }
  cvse:CV[]=[];
  
  ngOnInit(): void {
    this.cvse=this.embaucheService.embaucheListe();
  }

}
