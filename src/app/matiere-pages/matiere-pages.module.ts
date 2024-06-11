import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatierePagesPageRoutingModule } from './matiere-pages-routing.module';

import { MatierePagesPage } from './matiere-pages.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatierePagesPageRoutingModule
  ],
  declarations: [MatierePagesPage]
})
export class MatierePagesPageModule {}
