import { Component, OnInit } from '@angular/core';
import { NavigatorService } from 'src/app/services/navigator.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private nav: NavigatorService) { }

  ngOnInit() {
  }

}
