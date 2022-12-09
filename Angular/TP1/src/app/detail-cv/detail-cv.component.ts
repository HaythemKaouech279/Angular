import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CV } from '../cv-model';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent implements OnInit {
  cv: CV | undefined;

  constructor(private cvService: CvService,
    private activatedRoute: ActivatedRoute,
    private router :Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
     this.cv= this.cvService.getCvByID(params['id']);
    });
  }
  deleteCV():void{
    if(this.cv){
    this.cvService.deleteCv(this.cv);
    this.router.navigate(['cv'])

    }
  }

}
