import { Component, OnInit } from '@angular/core';
import { NavigatorService } from 'src/app/services/navigator.service';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-accountsettings',
  templateUrl: './accountsettings.page.html',
  styleUrls: ['./accountsettings.page.scss'],
})
export class AccountsettingsPage implements OnInit {

  user: any;

  constructor(private nav: NavigatorService, private back: BackendService) { }

  ngOnInit() {
  }

  async ionViewWillEnter(){
    if(this.isLoggedIn){
      this.user = await this.back.getAccount();
    }
  }

  get isNotLoggedIn(){
    return !this.back.isLoggedIn;
  }

  get isLoggedIn(){
    return this.back.isLoggedIn;
  }

}
