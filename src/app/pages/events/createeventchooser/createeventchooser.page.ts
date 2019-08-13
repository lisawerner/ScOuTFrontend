import { Component, OnInit } from '@angular/core';
import { NavigatorService } from 'src/app/services/navigator.service';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-createeventchooser',
  templateUrl: './createeventchooser.page.html',
  styleUrls: ['./createeventchooser.page.scss'],
})
export class CreateeventchooserPage implements OnInit {

  templates: any = [];

  constructor(private nav:NavigatorService, private backendService: BackendService) { }

  ngOnInit() {
  }

  async ionViewWillEnter(){
    this.templates = [];
    if(this.isLoggedIn){
      const result = await this.backendService.getTemplates('', '');
      const allTemplates =  result.data;
        if(allTemplates.length === 0){
          this.nav.navigateForward('createevent');
        }
      for(const temp of allTemplates){
        const teamSSSSSS = await this.backendService.getTeams(temp.teamref, '', true);
        const team = teamSSSSSS[0];
        this.templates.push({template: temp, team: team.name})
      }
    }
  }

  get isLoggedIn(){
    return this.backendService.isLoggedIn;
  }

  get isNotLoggedIn(){
    return !this.backendService.isLoggedIn;
  }

  openLogin(){
    this.nav.navigateLogin('eventlist');
  }

}
