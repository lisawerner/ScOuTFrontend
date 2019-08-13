import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialtaskPage } from './tutorialtask.page';

describe('TutorialtaskPage', () => {
  let component: TutorialtaskPage;
  let fixture: ComponentFixture<TutorialtaskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialtaskPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialtaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
