import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowrecommendationsPage } from './showrecommendations.page';

describe('ShowrecommendationsPage', () => {
  let component: ShowrecommendationsPage;
  let fixture: ComponentFixture<ShowrecommendationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowrecommendationsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowrecommendationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
