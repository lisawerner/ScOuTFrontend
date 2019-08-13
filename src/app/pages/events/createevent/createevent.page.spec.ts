import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateeventPage } from './createevent.page';

describe('CreateeventPage', () => {
  let component: CreateeventPage;
  let fixture: ComponentFixture<CreateeventPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateeventPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateeventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
