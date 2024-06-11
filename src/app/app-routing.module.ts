import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login-page',
    loadChildren: () => import('./login-page/login-page.module').then( m => m.LoginPagePageModule)
  },
  {
    path: 'sigin-page',
    loadChildren: () => import('./sigin-page/sigin-page.module').then( m => m.SiginPagePageModule)
  },
  {
    path: 'niveau-pages',
    loadChildren: () => import('./niveau-pages/niveau-pages.module').then( m => m.NiveauPagesPageModule)
  },
  {
    path: 'matiere-pages',
    loadChildren: () => import('./matiere-pages/matiere-pages.module').then( m => m.MatierePagesPageModule)
  },
  {
    path: 'matiere-cour-pages',
    loadChildren: () => import('./matiere-cour-pages/matiere-cour-pages.module').then( m => m.MatiereCourPagesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
