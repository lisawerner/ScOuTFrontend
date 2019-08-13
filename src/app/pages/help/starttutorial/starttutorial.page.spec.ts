import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarttutorialPage } from './starttutorial.page';

describe('StarttutorialPage', () => {
  let component: StarttutorialPage;
  let fixture: ComponentFixture<StarttutorialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarttutorialPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarttutorialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
