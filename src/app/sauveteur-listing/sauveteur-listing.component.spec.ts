import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SauveteurListingComponent } from './Sauveteur-listing.component';

describe('SauveteurListingComponent', () => {
  let component: SauveteurListingComponent;
  let fixture: ComponentFixture<SauveteurListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SauveteurListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SauveteurListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
