import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { ITeamViewModel } from '../../models/player.model';
import { ITeamListViewModel } from '../../models/team.model';

export const playersMock: ITeamViewModel = {
    id: 8,
    name: 'Borussia Dortmund',
    country: 'Germany',
    players: [
        {
            id: 1, number: 1, name: 'Roman Bürki', position: 'Goalkeeper', dateOfBirth: new Date(1990, 10, 14),
            nation: 'Switzerland', marketValue: 14, isFavourite: false
        },
        {
            id: 2, number: 16, name: 'Manuel Akanji', position: 'Centre-back', dateOfBirth: new Date(1995, 6, 19),
            nation: 'Switzerland', marketValue: 40, isFavourite: false
        },
        {
            id: 3, number: 4, name: 'Abdou Diallo', position: 'Centre-back', dateOfBirth: new Date(1996, 4, 4),
            nation: 'France', marketValue: 33, isFavourite: false
        },
        {
            id: 4, number: 2, name: 'Dan-Axel Zagadou', position: 'Centre-back', dateOfBirth: new Date(1999, 5, 3),
            nation: 'France', marketValue: 30, isFavourite: false
        },
        {
            id: 5, number: 5, name: 'Achraf Hakimi', position: 'Right-back', dateOfBirth: new Date(1998, 10, 4),
            nation: 'Morocco', marketValue: 30, isFavourite: false
        },
        {
            id: 6, number: 28, name: 'Axel Witsel', position: 'Defensive Midfield', dateOfBirth: new Date(1989, 0, 30),
            nation: 'Belgium', marketValue: 40, isFavourite: false
        },
        {
            id: 7, number: 6, name: 'Thomas Delaney', position: 'Central Midfield', dateOfBirth: new Date(1991, 8, 3),
            nation: 'Denmark', marketValue: 27, isFavourite: false
        },
        {
            id: 8, number: 11, name: 'Marco Reus', position: 'Attacking Midfield', dateOfBirth: new Date(1989, 4, 31),
            nation: 'Germany', marketValue: 50, isFavourite: true
        },
        {
            id: 9, number: 7, name: 'Jadon Sancho', position: 'Right Winger', dateOfBirth: new Date(2000, 2, 25),
            nation: 'England', marketValue: 80, isFavourite: false
        },
        {
            id: 10, number: 22, name: 'Christian Pulisic', position: 'Right Winger', dateOfBirth: new Date(1998, 8, 18),
            nation: 'United States', marketValue: 60, isFavourite: false
        },
        {
            id: 11, number: 9, name: 'Paco Alcácer', position: 'Centre-Forward', dateOfBirth: new Date(1993, 7, 30),
            nation: 'Spain', marketValue: 40, isFavourite: false
        },
    ]
};

export const teamsMock: ITeamListViewModel[] = [
    {
        id: 1, name: 'FC Barcelona', country: 'Spain', squad: 23, age: 27.4,
        totalMarketValue: 1180, avarageMarketValue: 51.3, isFavourite: true
    },
    {
        id: 2, name: 'Real Madrid', country: 'Spain', squad: 25, age: 26.2,
        totalMarketValue: 965.3, avarageMarketValue: 38.61, isFavourite: false
    },
    {
        id: 3, name: 'Atlético Madrid', country: 'Spain', squad: 23, age: 26.7,
        totalMarketValue: 955, avarageMarketValue: 41.52, isFavourite: false
    },
    {
        id: 4, name: 'Juventus', country: 'Italy', squad: 24, age: 28.6,
        totalMarketValue: 782.5, avarageMarketValue: 32.6, isFavourite: false
    },
    {
        id: 5, name: 'Inter Milan', country: 'Italy', squad: 25, age: 28.7,
        totalMarketValue: 557.4, avarageMarketValue: 22.3, isFavourite: false
    },
    {
        id: 6, name: 'AC Milan', country: 'Italy', squad: 28, age: 26.5,
        totalMarketValue: 530, avarageMarketValue: 18.93, isFavourite: true
    },
    {
        id: 7, name: 'Bayern Munich', country: 'Germany', squad: 25, age: 26.6,
        totalMarketValue: 770.7, avarageMarketValue: 30.83, isFavourite: false
    },
    {
        id: 8, name: 'Borussia Dortmund', country: 'Germany', squad: 25, age: 25,
        totalMarketValue: 603.3, avarageMarketValue: 24.09, isFavourite: false
    },
    {
        id: 9, name: 'Manchester United', country: 'England', squad: 25, age: 27.5,
        totalMarketValue: 796, avarageMarketValue: 31.84, isFavourite: false
    },
    {
        id: 10, name: 'Arsenal', country: 'England', squad: 25, age: 27.5,
        totalMarketValue: 625.5, avarageMarketValue: 25.02, isFavourite: false
    },
];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {

        return of(null).pipe(
        //     mergeMap(() => {
        //         if (request.url.match(/\/books\/\d+$/) && request.method === 'GET') {
        //             const urlParts = request.url.split('/');
        //             const id = parseInt(urlParts[urlParts.length - 1], 10);
        //             const book = detailsMocks.find(x => x.id === id);
        //             if (book) {
        //                 return of(new HttpResponse({
        //                     status: 200,
        //                     body: book
        //                 }));
        //             } else {
        //                 return throwError({ error: { message: 'Not found' } });
        //             }
        //         }

        //         // pass through any requests not handled above
        //         return next.handle(request);
        //     })
        // )
        //     // call materialize and dematerialize to ensure delay
        //     // even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
        //     .pipe(materialize())
        //     .pipe(delay(500))
        //     .pipe(dematerialize()
        );

    }
}
