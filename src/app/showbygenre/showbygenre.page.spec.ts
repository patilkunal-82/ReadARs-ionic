import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowbygenrePage } from './showbygenre.page';

describe('ShowbygenrePage', () => {
  let component: ShowbygenrePage;
  let fixture: ComponentFixture<ShowbygenrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowbygenrePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowbygenrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
