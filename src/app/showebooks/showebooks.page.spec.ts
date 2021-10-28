import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowebooksPage } from './showebooks.page';

describe('ShowebooksPage', () => {
  let component: ShowebooksPage;
  let fixture: ComponentFixture<ShowebooksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowebooksPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowebooksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
