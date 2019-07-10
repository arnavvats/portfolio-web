import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)},
  {path: 'tour', loadChildren: () => import('./pages/tour/tour.module').then(m => m.TourModule)},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
