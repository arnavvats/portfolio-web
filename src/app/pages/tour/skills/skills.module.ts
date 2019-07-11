import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills.component';
import {RouterModule, Routes} from '@angular/router';
const routes: Routes = [
  {
    path: '', component: SkillsComponent
  }
];
@NgModule({
  declarations: [SkillsComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,

  ]
})
export class SkillsModule { }
