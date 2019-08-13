import { Component, OnInit } from '@angular/core';
import { NavigatorService } from 'src/app/services/navigator.service';

@Component({
  selector: 'app-lexikon',
  templateUrl: './lexikon.page.html',
  styleUrls: ['./lexikon.page.scss'],
})
export class LexikonPage implements OnInit {

  constructor(private nav: NavigatorService) { }

  ngOnInit() {
  }

}
