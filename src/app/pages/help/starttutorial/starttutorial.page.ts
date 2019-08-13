import { Component, OnInit } from '@angular/core';
import { NavigatorService } from 'src/app/services/navigator.service';

@Component({
  selector: 'app-starttutorial',
  templateUrl: './starttutorial.page.html',
  styleUrls: ['./starttutorial.page.scss'],
})
export class StarttutorialPage implements OnInit {

  constructor(private nav: NavigatorService) { }

  ngOnInit() {
  }

}
