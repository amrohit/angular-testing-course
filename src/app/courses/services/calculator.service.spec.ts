import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

// Test suit
describe("CalculatorService", () => {
  // Specification
  it("should add two number", () => {
    // creating a fake version of logger service by creating a new instance of it
    const logger = new LoggerService();

    // jasmine will take the original spied object and beside calling the original functionality, it replaces the methods with a mock one instead of using it original one
    spyOn(logger, "log");

    const calculator = new CalculatorService(logger);

    const result = calculator.add(2, 2);

    expect(result).toBe(4);

    expect(logger.log).toHaveBeenCalledTimes(1);
  });

  // Specification
  it("should subtract two number", () => {
    const calculator = new CalculatorService(new LoggerService());

    const result = calculator.subtract(2, 2);

    expect(result).toBe(0);
  });
});
