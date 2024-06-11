import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatiereCourPagesPage } from './matiere-cour-pages.page';

const routes: Routes = [
  {
    path: '',
    component: MatiereCourPagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatiereCourPagesPageRoutingModule {}
