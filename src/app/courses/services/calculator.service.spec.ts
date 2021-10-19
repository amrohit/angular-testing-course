import { TestBed } from "@angular/core/testing";
import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

// Test suit
describe("CalculatorService", () => {
  //using beforeEach to avoid code repeating for initialized which we need in more than one
  //test specification.
  // beforeEach will run before our specification

  //to make available our variable through out the specs we need to declare here

  let calculator: CalculatorService, loggerSpy: any;

  beforeEach(() => {
    console.log("calling beforeEach");
    loggerSpy = jasmine.createSpyObj("LoggerService", ["log"]);
    calculator = new CalculatorService(loggerSpy);

    // instead of initializing the instances by calling constructor explicitly
    // we can provide depedency injection here using testbed utility

    TestBed.configureTestingModule({
      providers: [
        CalculatorService, // using Real instance of calculator service
        // using angular dependency mechanism to swap actual implementation of dependencies by jasmine
        { provide: LoggerService, useValue: loggerSpy }, //Since we are not using actual instance
        // Logger service is dependency of CalculatorService
      ],
    });
    // TestBed.get in deprecated
    calculator = TestBed.inject(CalculatorService);
  });

  // Specification (and each test are independent and does not interfere with each other)
  // and the calculation instance that are used on spec 1 is different than the spec 2nd one.
  // these test should be isolated from each other
  it("should add two number", () => {
    console.log("calling our first specifications");
    // creating a fake version of logger service by creating a new instance of it
    // const logger = new LoggerService();

    // jasmine will take the original spied object and beside calling the original functionality, it replaces the methods with a mock one instead of using it original one
    // spyOn(logger, "log");

    // if we want to do the above steps with  a single line using jasmine.createSpyObj() method then
    // const logger = jasmine.createSpyObj("LoggerService", ["log"]);

    // const calculator = new CalculatorService(logger);

    const result = calculator.add(2, 2);

    expect(result).toBe(4);

    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });

  // Specification
  it("should subtract two number", () => {
    // const calculator = new CalculatorService(new LoggerService());

    const result = calculator.subtract(2, 2);

    expect(result).toBe(0);
  });
});
