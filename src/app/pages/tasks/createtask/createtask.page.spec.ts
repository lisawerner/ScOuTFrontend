import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatetaskPage } from './createtask.page';

describe('CreatetaskPage', () => {
  let component: CreatetaskPage;
  let fixture: ComponentFixture<CreatetaskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatetaskPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatetaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
