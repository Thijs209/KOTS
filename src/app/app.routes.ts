import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {SubmitComponent} from "./submit/submit.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'submit', component: SubmitComponent}
];
