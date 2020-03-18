import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Sauveteurs } from '../sauveteur';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-Sauveteur-details',
  templateUrl: './Sauveteur-details.component.html',
  styleUrls: ['./Sauveteur-details.component.scss']
})
export class SauveteurDetailsComponent implements OnInit {
  Sauveteur;
  addSauveteurs(Sauveteur) {
    this.cartService.addSauveteurs(Sauveteur);
    this._snackBar.open('Vous suivez maintenant ce sauveteur', 'OK', {duration: 3000});
  }

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.Sauveteur = Sauveteurs[+params.get('SauveteurID')];
    });
  }

}
