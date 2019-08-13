import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StarttutorialPage } from './starttutorial.page';

const routes: Routes = [
  {
    path: '',
    component: StarttutorialPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StarttutorialPage]
})
export class StarttutorialPageModule {}
