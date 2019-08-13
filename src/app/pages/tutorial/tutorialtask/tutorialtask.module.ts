import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TutorialtaskPage } from './tutorialtask.page';

const routes: Routes = [
  {
    path: '',
    component: TutorialtaskPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TutorialtaskPage]
})
export class TutorialtaskPageModule {}
