import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialeventPage } from './tutorialevent.page';

describe('TutorialeventPage', () => {
  let component: TutorialeventPage;
  let fixture: ComponentFixture<TutorialeventPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialeventPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialeventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
