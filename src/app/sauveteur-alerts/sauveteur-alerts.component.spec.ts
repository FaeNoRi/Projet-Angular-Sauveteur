import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SauveteurAlertsComponent } from './Sauveteur-alerts.component';

describe('SauveteurAlertsComponent', () => {
  let component: SauveteurAlertsComponent;
  let fixture: ComponentFixture<SauveteurAlertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SauveteurAlertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SauveteurAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
