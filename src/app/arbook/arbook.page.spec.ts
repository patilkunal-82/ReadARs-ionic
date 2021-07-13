import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbookPage } from './arbook.page';

describe('ArbookPage', () => {
  let component: ArbookPage;
  let fixture: ComponentFixture<ArbookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArbookPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArbookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
