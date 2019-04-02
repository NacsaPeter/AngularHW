import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IPlayerListViewModel } from '../models/player.model';

@Component({
    templateUrl: 'new-player.component.html',
})
export class NewPlayerComponent {

    constructor(
        private dialogRef: MatDialogRef<NewPlayerComponent>
    ) { }

    playerForm = new FormGroup({
        number: new FormControl('', [Validators.required]),
        name: new FormControl('', [Validators.required]),
        position: new FormControl(),
        nation: new FormControl(),
        marketValue: new FormControl(),
        birthday: new FormControl()
      });

    player: IPlayerListViewModel = {
        id: null,
        number: null,
        name: null,
        position: null,
        dateOfBirth: null,
        nation: null,
        marketValue: null,
        isFavourite: null
    };

    addPlayer(): void {
        this.dialogRef.close(this.player);
    }
}
