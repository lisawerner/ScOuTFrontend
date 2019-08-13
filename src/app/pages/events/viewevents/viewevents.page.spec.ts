import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VieweventsPage } from './viewevents.page';

describe('VieweventsPage', () => {
  let component: VieweventsPage;
  let fixture: ComponentFixture<VieweventsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VieweventsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VieweventsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
