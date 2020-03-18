import { Component, OnInit } from '@angular/core';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.scss']
})
export class InfosComponent implements OnInit {
  Infos;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.Infos = this.cartService.getInfos();
  }

}

