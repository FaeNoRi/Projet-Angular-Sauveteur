import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html',
  styleUrls: ['./follow.component.scss']
})

export class FollowComponent implements OnInit {
  followSauveteurs;

  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit() {
    this.followSauveteurs = this.cartService.getSauveteurs();
  }

}
