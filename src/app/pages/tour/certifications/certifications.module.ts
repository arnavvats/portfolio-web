import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificationsComponent } from './certifications.component';
import {RouterModule, Routes} from '@angular/router';
const routes: Routes = [
  {
    path: '', component: CertificationsComponent
  }, {
    path: '**', redirectTo: ''
  }
];
@NgModule({
  declarations: [CertificationsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CertificationsModule { }
