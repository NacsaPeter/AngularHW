import { Component } from '@angular/core';
import { ITeamViewModel } from '../models/player.model';
import { ActivatedRoute } from '@angular/router';
import { FootballClientService } from '../client/football-api-client.service';
import { map, catchError, finalize, filter, tap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { NewPlayerComponent } from '../components/new-player.component';

@Component({
    templateUrl: './player-list.page.component.html',
})
export class PlayerListPageComponent {
    displayedColumns: string[] = ['number', 'name', 'position', 'age', 'nation', 'marketValue', 'favourite'];

    error: string | null = null;
    isLoading = true;
    team: ITeamViewModel = {
        id: 0,
        name: '',
        country: '',
        players: []
    };

    constructor(
        private route: ActivatedRoute,
        private footballApiClient: FootballClientService,
        private dialog: MatDialog
    ) {
        this.team.id = +this.route.snapshot.paramMap.get('id');
        this.loadTeam();
    }

    loadTeam() {
        this.isLoading = true;
        this.footballApiClient.getPlayers(this.team.id).pipe(
            map(res => this.team = res),
            catchError(error => this.error = error),
            finalize(() => this.isLoading = false)
        ).subscribe();
    }

    addPlayer() {
        const dialogRef = this.dialog.open(NewPlayerComponent);

        dialogRef.afterClosed().pipe(
            filter(o => !!o),
            tap(o => this.team.players.push(o))
        ).subscribe();
    }
}
