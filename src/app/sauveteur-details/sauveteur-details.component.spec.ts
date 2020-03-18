import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SauveteurDetailsComponent } from './Sauveteur-details.component';

describe('SauveteurDetailsComponent', () => {
  let component: SauveteurDetailsComponent;
  let fixture: ComponentFixture<SauveteurDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SauveteurDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SauveteurDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
