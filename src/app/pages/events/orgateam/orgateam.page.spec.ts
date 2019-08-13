import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgateamPage } from './orgateam.page';

describe('OrgateamPage', () => {
  let component: OrgateamPage;
  let fixture: ComponentFixture<OrgateamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgateamPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgateamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
