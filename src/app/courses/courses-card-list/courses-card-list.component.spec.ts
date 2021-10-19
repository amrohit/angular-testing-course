import { DebugElement } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { COURSES } from "../../../../server/db-data";
import { setupCourses } from "../common/setup-test-data";
import { CoursesModule } from "../courses.module";
import { sortCoursesBySeqNo } from "../home/sort-course-by-seq";
import { Course } from "../model/course";
import { CoursesCardListComponent } from "./courses-card-list.component";

describe("CoursesCardListComponent", () => {
  // series of variables will be used throughout the test

  let component: CoursesCardListComponent;

  // test uility type for obtainng/debugging the compoent
  // will bring lots of feature which will be needed to test the component
  let fixture: ComponentFixture<CoursesCardListComponent>;

  let el: DebugElement;

  //init our test
  // async is going to wait for this asynchornou operation triggered by the below code and async is going to wait for 5 sec
  beforeEach(async () => {
    //setting up testing module and provide the dependencies

    TestBed.configureTestingModule({
      imports: [CoursesModule],
    })
      .compileComponents()
      .then(() => {
        //setup of our test

        fixture = TestBed.createComponent(CoursesCardListComponent);

        component = fixture.componentInstance;

        el = fixture.debugElement;
      });
  });

  it("should create the component", () => {
    // pending();

    expect(component).toBeTruthy();

    console.log(component);
  });

  it("should display the course list", () => {
    // pending();

    component.courses = setupCourses();

    console.log(el.nativeElement.outerHTML); //is empty

    //notify the DOM about changes
    fixture.detectChanges();

    const cards = el.queryAll(By.css(".course-card"));

    expect(cards).toBeTruthy("Could not find cards");

    expect(cards.length).toBe(12, "Unexpected number of courses");
  });

  it("should display the first course", () => {
    pending();
  });
});
