import { Component, OnInit } from '@angular/core';
import { NavigatorService } from 'src/app/services/navigator.service';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-createteam',
  templateUrl: './createteam.page.html',
  styleUrls: ['./createteam.page.scss'],
})
export class CreateteamPage implements OnInit {

  private validation: {invalid: Boolean, message: String};

  constructor(private nav: NavigatorService, private backendservice: BackendService) {
    this.validation = {
      invalid: false,
      message: ""
    };
  }

  ngOnInit() {
  }

  async ionViewWillEnter(){
    // this.teams = await this.backendservice.getTeams();
  }

  createTeam(form) {
    const result = form.value.teamname;
    this.validation = {
      invalid: false,
      message: ""
    };

    if(result === ''){
      this.validation = {
        invalid: true,
        message: "Die Eingabe ist nicht vollständig"
      };
      return;
    }

    let request = this.backendservice.createTeam(result);
    request.then((ret) => {
      if(!ret.success){
        //console.log("Database Feedback: ", ret.error);
        this.validation = {
          invalid: true,
          message: ret.error};
      } else {
        this.nav.navigateForwardParameter('viewteam', ret.data);
      }
    }, (err) => {
      console.error(err);
    });
  }

  get isLoggedIn(){
    return this.backendservice.isLoggedIn;
  }

  get isNotLoggedIn(){
    return !this.backendservice.isLoggedIn;
  }

  openLogin(){
    this.nav.navigateLogin('createteam');
  }
}
