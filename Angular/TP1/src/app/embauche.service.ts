import { Injectable } from '@angular/core';
import { CV } from './cv-model';

import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  private cvs: CV[];
  exists: boolean = false;
  embaucheListe(): CV[] {
    return this.cvs;
  }
  embauchercv(cv: CV): void {
    this.exists=false;
    this.cvs.forEach(cvc => {
      if(cv.name== cvc.name)this.exists=true
    });
    if (!this.exists) {
      this.cvs.push(cv);
      this.toastrService.success("Profile  Embauched Successfully");

    }
    else { this.toastrService.error("Profile Already Embauched"); }
  }
  constructor(private toastrService: ToastrService) {
    this.cvs = [];
  }
}
