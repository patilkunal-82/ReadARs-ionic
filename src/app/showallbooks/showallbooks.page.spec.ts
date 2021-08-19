import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowallbooksPage } from './showallbooks.page';

describe('ShowallbooksPage', () => {
  let component: ShowallbooksPage;
  let fixture: ComponentFixture<ShowallbooksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowallbooksPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowallbooksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
