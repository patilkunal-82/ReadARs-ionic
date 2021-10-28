import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagebookshelpPage } from './managebookshelp.page';

describe('ManagebookshelpPage', () => {
  let component: ManagebookshelpPage;
  let fixture: ComponentFixture<ManagebookshelpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagebookshelpPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagebookshelpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
