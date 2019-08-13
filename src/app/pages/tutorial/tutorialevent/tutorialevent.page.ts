import { Component, OnInit } from '@angular/core';
import { NavigatorService } from 'src/app/services/navigator.service';

@Component({
  selector: 'app-tutorialevent',
  templateUrl: './tutorialevent.page.html',
  styleUrls: ['./tutorialevent.page.scss'],
})
export class TutorialeventPage implements OnInit {

  constructor(private nav: NavigatorService) { }

  ngOnInit() {
  }

}
