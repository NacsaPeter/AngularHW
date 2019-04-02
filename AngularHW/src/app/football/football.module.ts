import { NgModule } from '@angular/core';

import { FootballRoutingModule } from './football-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TeamListPageComponent } from './pages/team-list.page.component';
import { PlayerListPageComponent } from './pages/player-list.page.component';
import { FootballClientService } from './client/football-api-client.service';
import { NewPlayerComponent } from './components/new-player.component';
import { FakeBackendInterceptor } from './client/mock/fake-football-api-client.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


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
    FootballClientService,
    { provide: HTTP_INTERCEPTORS, useClass: FakeBackendInterceptor, multi: true }
  ],
  entryComponents: [
    NewPlayerComponent
  ]
})
export class FootballModule { }
