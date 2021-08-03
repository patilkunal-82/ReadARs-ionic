import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiFileContentUploadComponent } from './multi-file-content-upload.component';

describe('MultiFileContentUploadComponent', () => {
  let component: MultiFileContentUploadComponent;
  let fixture: ComponentFixture<MultiFileContentUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiFileContentUploadComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiFileContentUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
