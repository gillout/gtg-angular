import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import {WelcomeModule} from "./welcome/welcome.module";
import {VietnamModule} from "./vietnam/vietnam.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    WelcomeModule,
    VietnamModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
