import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VietnamComponent } from './vietnam/vietnam.component';
import {VietnamRoutingModule} from "./vietnam-routing.module";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    VietnamComponent
  ],
  exports: [
    VietnamComponent
  ],
  imports: [
    CommonModule,
    VietnamRoutingModule,
    SharedModule
  ]
})
export class VietnamModule { }
