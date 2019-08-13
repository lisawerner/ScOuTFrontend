import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtaskPage } from './viewtask.page';

describe('ViewtaskPage', () => {
  let component: ViewtaskPage;
  let fixture: ComponentFixture<ViewtaskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtaskPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
