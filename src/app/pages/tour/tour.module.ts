import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TourComponent } from './tour.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import { ExperienceComponent } from './experience/experience.component';
const routes: Routes = [
  {
    path: '', component: TourComponent,
  }, {
    path: '**', redirectTo: ''
  }
];
@NgModule({
  declarations: [TourComponent, ExperienceComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class TourModule { }
