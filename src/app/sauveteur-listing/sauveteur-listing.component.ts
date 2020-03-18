import { Component, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Sauveteurs } from '../sauveteur';


@Component({
  selector: 'app-Sauveteur-listing',
  templateUrl: './Sauveteur-listing.component.html',
  styleUrls: ['./Sauveteur-listing.component.scss']
})
export class SauveteurListingComponent {
  Sauveteurs = Sauveteurs;

  constructor(
    private _snackBar: MatSnackBar
  ) { }

  tips() {
    this._snackBar.open("Merci de soutenir nos sauveteurs !", 'OK', {duration: 3000});
  }

  onNotify() {
    window.alert('Ce sauveteur est malheuresement décédé ...');
  }
}

