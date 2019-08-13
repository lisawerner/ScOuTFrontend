import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewteammemberPage } from './viewteammember.page';

describe('ViewteammemberPage', () => {
  let component: ViewteammemberPage;
  let fixture: ComponentFixture<ViewteammemberPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewteammemberPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewteammemberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
