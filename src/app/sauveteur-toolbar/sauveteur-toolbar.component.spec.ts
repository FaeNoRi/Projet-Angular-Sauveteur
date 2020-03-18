import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SauveteurToolbarComponent } from './Sauveteur-toolbar.component';

describe('SauveteurToolbarComponent', () => {
  let component: SauveteurToolbarComponent;
  let fixture: ComponentFixture<SauveteurToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SauveteurToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SauveteurToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
