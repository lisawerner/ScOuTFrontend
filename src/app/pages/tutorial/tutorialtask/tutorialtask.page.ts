import { Component, OnInit } from '@angular/core';
import { NavigatorService } from 'src/app/services/navigator.service';

@Component({
  selector: 'app-tutorialtask',
  templateUrl: './tutorialtask.page.html',
  styleUrls: ['./tutorialtask.page.scss'],
})
export class TutorialtaskPage implements OnInit {

  constructor(private nav: NavigatorService) { }

  ngOnInit() {
  }

}
