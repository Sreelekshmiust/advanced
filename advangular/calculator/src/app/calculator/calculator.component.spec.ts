import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';

describe('Calculator', () => {
  let calculator: CalculatorComponent;

  beforeEach(() => {
    calculator = new CalculatorComponent();
  });

  it('should add two numbers', () => {
    const result = calculator.add(3, 4);
    expect(result).toBe(7);
  });

  it('should subtract two numbers', () => {
    const result = calculator.subtract(7, 3);
    expect(result).toBe(4);
  });
});