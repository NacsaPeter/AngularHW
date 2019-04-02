import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ITeamListViewModel } from '../models/team.model';
import { teamsMock, playersMock } from './mock/fake-football-api-client.service';
import { ITeamViewModel } from '../models/player.model';

const teamfilter = (filter: string) => {
  return (x: ITeamListViewModel): boolean => {
    return ((filter && x.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1) || !filter);
  };
};

@Injectable()
export class FootballClientService {

  constructor(
    private http: HttpClient
  ) { }

  getTeams(filter: string): Observable<ITeamListViewModel[]> {
    const obs = filter
      ? of(teamsMock.filter(teamfilter(filter)))
      : of(teamsMock);
    return obs.pipe(delay(500));
    // return throwError('hiba');
  }

  getPlayers(id: number): Observable<ITeamViewModel> {
    return this.http.get<ITeamViewModel>(`/teams/${id}`);
  }

}
