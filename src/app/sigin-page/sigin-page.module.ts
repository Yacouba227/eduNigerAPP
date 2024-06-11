import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SiginPagePageRoutingModule } from './sigin-page-routing.module';

import { SiginPagePage } from './sigin-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SiginPagePageRoutingModule
  ],
  declarations: [SiginPagePage]
})
export class SiginPagePageModule {}
