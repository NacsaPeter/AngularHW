export interface ITeamViewModel {
    id: number;
    name: string;
    country: string;
    players: IPlayerListViewModel[];
}

export interface IPlayerListViewModel {
    id: number;
    number: number;
    name: string;
    position: string;
    dateOfBirth: Date;
    nation: string;
    marketValue: number;
    isFavourite: boolean;
}
