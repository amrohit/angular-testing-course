import { fakeAsync, flush, tick } from "@angular/core/testing";
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
});
