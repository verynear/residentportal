import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ApplicantComponent} from './pages/applicant/applicant.component';

const routes: Routes = [
  { path: 'home', component: ApplicantComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
