import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import {FooterComponent} from "../shared/components/footer/footer.component";
import {HeaderComponent} from "../shared/components/header/header.component";



@NgModule({
  declarations: [
    WelcomeComponent
  ],
  exports: [
  WelcomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class WelcomeModule { }
