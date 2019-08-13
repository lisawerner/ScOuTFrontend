import { Component, OnInit } from '@angular/core';
import { NavigatorService } from 'src/app/services/navigator.service';

@Component({
  selector: 'app-tutorialteam',
  templateUrl: './tutorialteam.page.html',
  styleUrls: ['./tutorialteam.page.scss'],
})
export class TutorialteamPage implements OnInit {

  constructor(private nav: NavigatorService) { }

  ngOnInit() {
  }

}
