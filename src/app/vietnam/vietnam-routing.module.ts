import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VietnamComponent } from './vietnam/vietnam.component';
import {RouterModule} from "@angular/router";

const routes = [
  { path: '', component: VietnamComponent }
];

@NgModule({
  declarations: [
  ],
  exports: [
    RouterModule
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class VietnamRoutingModule { }
