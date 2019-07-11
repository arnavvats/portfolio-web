import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AchievementsComponent } from './achievements.component';
import {RouterModule, Routes} from '@angular/router';
const routes: Routes = [
  {
    path: '', component: AchievementsComponent
  }, {
    path: '**', redirectTo: ''
  }
];
@NgModule({
  declarations: [AchievementsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AchievementsModule { }
