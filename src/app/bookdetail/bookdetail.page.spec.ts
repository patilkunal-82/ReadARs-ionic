import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookdetailPage } from './bookdetail.page';

describe('BookdetailPage', () => {
  let component: BookdetailPage;
  let fixture: ComponentFixture<BookdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookdetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
