import { Route, RouterModule, Routes } from "@angular/router";
import { AddCvComponent } from "./add-cv/add-cv.component";
import { AuthComponent } from "./auth/auth.component";
import { CvComponent } from "./cv/cv.component";
import { DetailCvComponent } from "./detail-cv/detail-cv.component";
import { FormCardComponent } from "./form-card/form-card.component";
import { ParentComponent } from "./parent/parent.component";
import { TrainingComponent } from "./training/training.component";

const APP_ROUTING: Routes = [
    { path: '', component: CvComponent },
    { path: 'cv' ,children:[
        
        {path:'addcv',component:AddCvComponent},
        { path: '', component: CvComponent },
        { path: ':id', component: DetailCvComponent }
    ]},
    { path: 'auth', component: AuthComponent },
    


    { path: 'cartevisite', component: FormCardComponent },
    { path: 'parent', component: ParentComponent },
    { path: 'color/:color', component: TrainingComponent },
];
export const ROUTING = RouterModule.forRoot(APP_ROUTING);