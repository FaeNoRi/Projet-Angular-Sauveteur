import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-Sauveteur-alerts',
  templateUrl: './Sauveteur-alerts.component.html',
  styleUrls: ['./Sauveteur-alerts.component.scss']
})
export class SauveteurAlertsComponent implements OnInit {

  @Input() Sauveteur;
  @Output() notify = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

}
