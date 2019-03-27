import { Component, OnInit, OnDestroy } from '@angular/core';
import { ITeamListViewModel } from '../models/team.model';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { FootballClientService } from '../client/football-api-client.service';
import { debounceTime, distinctUntilChanged, takeUntil, map, catchError, finalize } from 'rxjs/operators';

@Component({
    templateUrl: './team-list.page.component.html',
})
export class TeamListPageComponent implements OnInit, OnDestroy {
    displayedColumns: string[] = ['name', 'country', 'squad', 'age', 'totalMarketValue', 'avarageMarketValue', 'favourite', 'view'];

    destroy$ = new Subject();
    debouncer$ = new Subject<string>();

    error: string | null = null;
    isLoading = true;
    filter = '';
    teams: ITeamListViewModel[];

    ngOnInit() {
        this.loadTeams();
        this.debouncer$
        .pipe(
            debounceTime(500),
            distinctUntilChanged((x, y) => x === y),
            takeUntil(this.destroy$))
        .subscribe(() => this.loadTeams());
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.unsubscribe();
    }

    loadTeams() {
        this.isLoading = true;
        this.footballApiClient.getTeams(this.filter).pipe(
            map(res => this.teams = res),
            catchError(error => this.error = error),
            finalize(() => this.isLoading = false)
        ).subscribe();
    }

    constructor(
        private router: Router,
        private footballApiClient: FootballClientService
    ) {}

    navigate(id: number) {
        this.router.navigate(['team', id]);
    }
}
