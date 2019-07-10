import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TourComponent } from './tour.component';
import {Routes} from '@angular/router';
const routes: Routes = [
  {
    path: '', component: TourComponent,
  }, {
    path: '**', redirectTo: ''
  }
];
@NgModule({
  declarations: [TourComponent],
  imports: [
    CommonModule
  ]
})
export class TourModule { }
