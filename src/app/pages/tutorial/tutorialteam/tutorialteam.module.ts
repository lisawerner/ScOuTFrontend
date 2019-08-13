import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TutorialteamPage } from './tutorialteam.page';

const routes: Routes = [
  {
    path: '',
    component: TutorialteamPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TutorialteamPage]
})
export class TutorialteamPageModule {}
