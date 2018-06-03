import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesviewComponent } from './countriesview.component';

describe('CountriesviewComponent', () => {
  let component: CountriesviewComponent;
  let fixture: ComponentFixture<CountriesviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountriesviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
