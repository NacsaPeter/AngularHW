import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './core/components/layout.component';
import { FootballModule } from './football/football.module';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    loadChildren: () => FootballModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
