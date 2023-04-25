import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryDetails2Component } from './country-details2.component';

describe('CountryDetails2Component', () => {
  let component: CountryDetails2Component;
  let fixture: ComponentFixture<CountryDetails2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryDetails2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryDetails2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
