import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CvComponent } from './cv/cv.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CarteVisiteComponent } from './carte-visite/carte-visite.component';
import { FormCardComponent } from './form-card/form-card.component';

import { ParentComponent } from './parent/parent.component';
import { FilsComponent } from './fils/fils.component';
import { TrainingComponent } from './training/training.component';
import { ListComponent } from './list/list.component';

import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    CarteVisiteComponent,
    FormCardComponent,
   
    ParentComponent,
        FilsComponent,
        TrainingComponent,
        ListComponent,
   
        ItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      
      {path: 'cv', component: CvComponent},
      {path: 'cartevisite', component: FormCardComponent },
      {path: 'parent', component: ParentComponent },
      {path: 'training', component: TrainingComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
