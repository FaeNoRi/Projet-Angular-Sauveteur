import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  itemSauveteurs = [];
  constructor(
    private http: HttpClient
  ) { }

  addSauveteurs(Sauveteur) {
    this.itemSauveteurs.push(Sauveteur);
  }

  getSauveteurs() {
    return this.itemSauveteurs;
  }

  clearSauveteurs() {
    this.itemSauveteurs = [];
    return this.itemSauveteurs;
  }

  getInfos() {
    return this.http.get('/assets/infos.json');
  }

}
