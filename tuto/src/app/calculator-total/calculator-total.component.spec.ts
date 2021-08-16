import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorTotalComponent } from './calculator-total.component';

describe('CalculatorTotalComponent', () => {
  let component: CalculatorTotalComponent;
  let fixture: ComponentFixture<CalculatorTotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorTotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
