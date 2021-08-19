import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowbylanguagePage } from './showbylanguage.page';

describe('ShowbylanguagePage', () => {
  let component: ShowbylanguagePage;
  let fixture: ComponentFixture<ShowbylanguagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowbylanguagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowbylanguagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
