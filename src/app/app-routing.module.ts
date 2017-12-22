import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: AppComponent},
  { path:'start-page', loadChildren: './start-page/start-page.module#StartPageModule' },
  { path:'about-page', loadChildren: './about-page/about-page.module#AboutPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
