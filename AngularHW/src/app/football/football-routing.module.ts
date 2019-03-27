import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamListPageComponent } from './pages/team-list.page.component';
import { PlayerListPageComponent } from './pages/player-list.page.component';

const routes: Routes = [
  { path: '', component: TeamListPageComponent },
  { path: 'team/:id', component: PlayerListPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FootballRoutingModule { }
