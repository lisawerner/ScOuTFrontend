import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateteamPage } from './createteam.page';

describe('CreateteamPage', () => {
  let component: CreateteamPage;
  let fixture: ComponentFixture<CreateteamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateteamPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateteamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
