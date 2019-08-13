import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialteamPage } from './tutorialteam.page';

describe('TutorialteamPage', () => {
  let component: TutorialteamPage;
  let fixture: ComponentFixture<TutorialteamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialteamPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialteamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
