import { Component, OnInit } from '@angular/core';
import { NavigatorService } from 'src/app/services/navigator.service';

@Component({
  selector: 'app-sitemap',
  templateUrl: './sitemap.page.html',
  styleUrls: ['./sitemap.page.scss'],
})
export class SitemapPage implements OnInit {

  constructor(private nav: NavigatorService) { }

  ngOnInit() {
  }

}
