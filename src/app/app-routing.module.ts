import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./welcome/welcome.module').then(module => module.WelcomeModule) },
  { path: 'vietnam', loadChildren: () => import('./vietnam/vietnam.module').then(module => module.VietnamModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
