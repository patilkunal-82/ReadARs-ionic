import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookvideoPage } from './bookvideo.page';

describe('BookvideoPage', () => {
  let component: BookvideoPage;
  let fixture: ComponentFixture<BookvideoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookvideoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookvideoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
