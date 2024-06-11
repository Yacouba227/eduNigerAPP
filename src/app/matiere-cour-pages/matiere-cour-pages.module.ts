import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatiereCourPagesPageRoutingModule } from './matiere-cour-pages-routing.module';

import { MatiereCourPagesPage } from './matiere-cour-pages.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatiereCourPagesPageRoutingModule
  ],
  declarations: [MatiereCourPagesPage]
})
export class MatiereCourPagesPageModule {}
