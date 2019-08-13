import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TutorialeventPage } from './tutorialevent.page';

const routes: Routes = [
  {
    path: '',
    component: TutorialeventPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TutorialeventPage]
})
export class TutorialeventPageModule {}
