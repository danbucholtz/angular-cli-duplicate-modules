import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageTwo } from './page-two';

import { SharedModule } from '../shared/shared.module';

export const ROUTES = [
  { path: '', component: PageTwo }
];

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [PageTwo]
})
export class PageTwoModule { }