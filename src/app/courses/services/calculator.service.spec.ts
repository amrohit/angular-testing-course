import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

// Test suit
describe("CalculatorService", () => {
  // Specification
  it("should add two number", () => {
    const calculator = new CalculatorService(new LoggerService());

    const result = calculator.add(2, 2);

    expect(result).toBe(4);
  });

  // Specification
  it("should subtract two number", () => {
    const calculator = new CalculatorService(new LoggerService());

    const result = calculator.subtract(2, 2);

    expect(result).toBe(0);
  });
});
