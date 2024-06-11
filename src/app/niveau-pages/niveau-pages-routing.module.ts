import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NiveauPagesPage } from './niveau-pages.page';

const routes: Routes = [
  {
    path: '',
    component: NiveauPagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NiveauPagesPageRoutingModule {}
