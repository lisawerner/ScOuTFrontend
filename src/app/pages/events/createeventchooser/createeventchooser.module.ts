import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CreateeventchooserPage } from './createeventchooser.page';

const routes: Routes = [
  {
    path: '',
    component: CreateeventchooserPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CreateeventchooserPage]
})
export class CreateeventchooserPageModule {}
