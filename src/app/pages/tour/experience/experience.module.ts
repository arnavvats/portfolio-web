import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ExperienceComponent} from './experience.component';
import {RouterModule, Routes} from '@angular/router';
const routes: Routes = [
  {
    path: '', component: ExperienceComponent
  }, {
    path: '**', redirectTo: ''
  }
];
@NgModule({
  declarations: [ExperienceComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ExperienceModule { }
