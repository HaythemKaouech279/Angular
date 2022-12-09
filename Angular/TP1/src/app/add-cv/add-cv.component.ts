import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CV } from '../cv-model';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css']
})
export class AddCvComponent implements OnInit {

  newcv: CV = {
    id: 0,
    name: "",
    firstName: "",
    job: "",
    url: ""
  }
  constructor(private cvService: CvService, private router: Router) { }

  ngOnInit(): void {
  }
  addCv(form: NgForm) {
    this.newcv = form.value;
    this.cvService.addCv(this.newcv);
    this.router.navigate(['cv']);
  }

}
