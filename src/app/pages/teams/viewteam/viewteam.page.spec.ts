import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewteamPage } from './viewteam.page';

describe('ViewteamPage', () => {
  let component: ViewteamPage;
  let fixture: ComponentFixture<ViewteamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewteamPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewteamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
