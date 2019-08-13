import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LexikonPage } from './lexikon.page';

describe('LexikonPage', () => {
  let component: LexikonPage;
  let fixture: ComponentFixture<LexikonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LexikonPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LexikonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
