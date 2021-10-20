import { fakeAsync, flush, flushMicrotasks, tick } from "@angular/core/testing";
import { of } from "rxjs";
import { delay } from "rxjs/operators";
fdescribe("Async Testing Examples", () => {
  it("Asynchronous test example with Jasmine done()", (done: DoneFn) => {
    let test = false;

    setTimeout(() => {
      console.log("Running assertions");

      test = true;

      expect(test).toBeTruthy();

      done();
    }, 1000);
  });

  it("Asynchronous test example - setTimeout()", fakeAsync(() => {
    let test = false;

    setTimeout(() => {});

    setTimeout(() => {
      console.log("Running assertions");

      test = true;

      expect(test).toBeTruthy();
    }, 1000);

    // tick(1000); //can be only called inside fakeAsync() block just to forward the time passage by `1000.

    flush();
    expect(test).toBeTruthy();
  }));

  it("Asynchronous test example - plain Promise", fakeAsync(() => {
    let test = false;

    console.log("Creating promise");

    Promise.resolve().then(() => {
      console.log("Promise evaluated successfully");

      test = true;
    });

    flushMicrotasks(); //Promise is microtask
    //Setimeout is considered to be a task or macro task
    console.log("Running test assertions");

    expect(test).toBeTruthy();
  }));

  // to fix this issue we will use fakeAsync zone
  it("Asynchronous test example - Observable", fakeAsync(() => {
    let test = false;

    console.log("Creating observable");

    // const test$ = of(test); //purely synchronous observable
    const test$ = of(test).pipe(delay(1000)); // async observable

    test$.subscribe(() => {
      test = true;
    });

    tick(1000); // moving the time forward by 1000
    console.log("Running test assertions");

    expect(test).toBe(true);
  }));
});
