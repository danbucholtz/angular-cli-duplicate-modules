import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageThree } from './page-three';

import { SharedModule } from '../shared/shared.module';

export const ROUTES = [
  { path: '', component: PageThree }
];

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [PageThree]
})
export class PageThreeModule { }