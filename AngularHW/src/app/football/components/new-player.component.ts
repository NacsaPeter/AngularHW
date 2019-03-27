import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    templateUrl: 'new-player.component.html',
})
export class NewPlayerComponent {

    constructor(
        private dialogRef: MatDialogRef<NewPlayerComponent>
    ) { }

    addPlayer(): void {
        this.dialogRef.close();
    }
}
