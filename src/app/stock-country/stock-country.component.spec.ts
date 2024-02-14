import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockCountryComponent } from './stock-country.component';

describe('StockCountryComponent', () => {
  let component: StockCountryComponent;
  let fixture: ComponentFixture<StockCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StockCountryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StockCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
