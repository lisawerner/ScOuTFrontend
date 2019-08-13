import { Component, OnInit } from '@angular/core';
import { NavigatorService } from 'src/app/services/navigator.service';
import { ViewEncapsulation } from '@angular/compiler/src/core';
import { BackendService } from 'src/app/services/backend.service';

const selector = 'app-footer';

@Component({
  selector,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  // encapsulation: ViewEncapsulation.Native,
})
export class FooterComponent implements OnInit {

  public static selector = selector;

  constructor(private nav: NavigatorService, private back: BackendService) {  }

  ngOnInit() {}

}
