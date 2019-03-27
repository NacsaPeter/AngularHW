import { NgModule } from '@angular/core';

import { FootballRoutingModule } from './football-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TeamListPageComponent } from './pages/team-list.page.component';
import { PlayerListPageComponent } from './pages/player-list.page.component';
import { FootballClientService } from './client/football-api-client.service';
import { NewPlayerComponent } from './components/new-player.component';


@NgModule({
  declarations: [
    NewPlayerComponent,
    TeamListPageComponent,
    PlayerListPageComponent,
  ],
  imports: [
    SharedModule,
    FootballRoutingModule,
  ],
  providers: [
    FootballClientService
  ],
  entryComponents: [
    NewPlayerComponent
  ]
})
export class FootballModule { }
