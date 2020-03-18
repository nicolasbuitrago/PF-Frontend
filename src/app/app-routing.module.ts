import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./feat/home-feat/home-feat.module').then(m => m.HomeFeatModule),
  },
  {
    path: 'studios',
    loadChildren: () => import('./feat/studios-feat/studios-feat.module').then(m => m.StudiosFeatModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
