import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { COURSES } from '../../../../server/db-data';
import { setupCourses } from '../common/setup-test-data';
import { CoursesModule } from '../courses.module';
import { sortCoursesBySeqNo } from '../home/sort-course-by-seq';
import { Course } from '../model/course';
import { CoursesCardListComponent } from './courses-card-list.component';




describe('CoursesCardListComponent', () => {


  //init our test
  beforeEach(() => {

    //setting up testing module and provide the dependencies

    TestBed.configureTestingModule({

      imports: [CoursesModule]


    })
  })
  it("should create the component", () => {

   pending();

  });


  it("should display the course list", () => {

    pending();

  });


  it("should display the first course", () => {

      pending();

  });


});


