import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TourComponent } from './tour.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
const routes: Routes = [
  {
    path: 'home', component: TourComponent,
  },
  {
    path: 'experience', loadChildren: () => import('./experience/experience.module').then(m => m.ExperienceModule)
  },
  {
    path: 'achievements', loadChildren: () => import('./achievements/achievements.module').then(m => m.AchievementsModule)
  },
  {
    path: 'certifications', loadChildren: () => import('./certifications/certifications.module').then(m => m.CertificationsModule)
  },
  {
    path: 'skills', loadChildren: () => import('./skills/skills.module').then(m => m.SkillsModule)
  },
  {
    path: '**', redirectTo: 'home'
  }
];
@NgModule({
  declarations: [TourComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class TourModule { }
