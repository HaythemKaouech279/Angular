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
import { ImagePipe } from './image.pipe';
import { EmbauchedComponent } from './embauched/embauched.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterSimulatorComponent } from './router-simulator/router-simulator.component';
import { DetailCvComponent } from './detail-cv/detail-cv.component';
import { ROUTING } from './app.rounting';
import { AuthComponent } from './auth/auth.component';
import { ImageLoopComponent } from './image-loop/image-loop.component';
import { AddCvComponent } from './add-cv/add-cv.component';

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
    AddCvComponent,
    ItemComponent,
    ImagePipe,
    EmbauchedComponent,
    NavbarComponent,
    RouterSimulatorComponent,
    AuthComponent,
    ImageLoopComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    ROUTING],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
