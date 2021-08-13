import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewaranchorindexPage } from './viewaranchorindex.page';

describe('ViewcommentsPage', () => {
  let component: ViewaranchorindexPage;
  let fixture: ComponentFixture<ViewaranchorindexPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewaranchorindexPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewaranchorindexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
