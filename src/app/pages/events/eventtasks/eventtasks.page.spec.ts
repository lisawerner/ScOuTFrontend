import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventtasksPage } from './eventtasks.page';

describe('EventtasksPage', () => {
  let component: EventtasksPage;
  let fixture: ComponentFixture<EventtasksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventtasksPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventtasksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
