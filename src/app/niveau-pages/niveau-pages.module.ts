import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NiveauPagesPageRoutingModule } from './niveau-pages-routing.module';

import { NiveauPagesPage } from './niveau-pages.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NiveauPagesPageRoutingModule
  ],
  declarations: [NiveauPagesPage]
})
export class NiveauPagesPageModule {}
