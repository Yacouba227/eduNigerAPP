import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiginPagePage } from './sigin-page.page';

const routes: Routes = [
  {
    path: '',
    component: SiginPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiginPagePageRoutingModule {}
