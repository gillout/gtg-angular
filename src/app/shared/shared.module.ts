import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AsideMenuComponent } from './components/aside-menu/aside-menu.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    AsideMenuComponent
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    AsideMenuComponent
    ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
