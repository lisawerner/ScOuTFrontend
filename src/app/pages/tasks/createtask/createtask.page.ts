import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { NavigatorService } from 'src/app/services/navigator.service';

@Component({
  selector: 'app-createtask',
  templateUrl: './createtask.page.html',
  styleUrls: ['./createtask.page.scss'],
})
export class CreatetaskPage implements OnInit {

  teams: any = [];
  team: any;
  teamevents: any;
  validation: {invalid: Boolean, message: String};

  choosedTeam: any;
  choosedEvent: any;

  constructor(private nav: NavigatorService, public backendService: BackendService) {}

  get getParams(){
    return this.nav.params;
  }

  async ionViewWillEnter(){
    this.validation = {
      invalid: false,
      message: ""
    };

    if(this.isLoggedIn){
      this.choosedTeam = null;
      this.choosedEvent = null;

      if(this.getParams === null || this.getParams === undefined){
        this.teams = await this.backendService.getTeams('', '', true);
        this.team = null;
        this.teamevents = null;
      } else {
        if(this.getParams.team !== null){
          this.choosedTeam = this.getParams.team;
          this.rememberTeam(this.choosedTeam._id);
        } else if(this.getParams.event !== null){
          this.choosedEvent = this.getParams.event;
          this.teamevents = this.choosedEvent;
          const teamssss = await this.backendService.getTeams(this.choosedEvent.teamref, '', true);
          this.choosedTeam = teamssss[0];
        }
      }
    }
  }

  ngOnInit() {
  }

  get isLoggedIn(){
    return this.backendService.isLoggedIn;
  }

  get isNotLoggedIn(){
    return !this.backendService.isLoggedIn;
  }

  openLogin(){
    this.nav.navigateLogin('tasklist');
  }

  async rememberTeam(teamID){
    this.team = teamID;
    console.log(this.team);
    this.teamevents = await this.backendService.getEvents(this.team, '', false);
    console.log("Get Events: ", this.teamevents);
  }

  async saveNewTask(form){
    this.validation = {
      invalid: false,
      message: ""};
    const result = form.value;

    //Check Name!
    if(result.taskname === ''){
      this.validation = {
        invalid: true,
        message: "Du musst einen Namen für den Task angeben!"
      };
      return;
    }

    //Check Team
    let teamID = result.teamID;
    if(this.choosedTeam !== null){
      teamID = this.choosedTeam._id;
    }
    if(teamID === ''){
      this.validation = {
        invalid: true,
        message: "Du musst ein Team (und danach ein Event) auswählen!"
      };
      return;
    }
    
    //Check Event
    let eventID = result.eventID;
    if(this.choosedEvent !== null){
      eventID = this.choosedEvent._id;
    }
    if(eventID === ''){
      this.validation = {
        invalid: true,
        message: "Du musst ein Event auswählen!"
      };
      return;
    }

    //Check Reminder
    if(result.dayreminder === null){
      result.dayreminder = '';
    }
    if(result.weekreminder === null){
      result.weekreminder = '';
    }
    if(result.monthreminder === null){
      result.monthreminder = '';
    }
    const sum = result.dayreminder + result.weekreminder + result.monthreminder;
    if(sum <= 0){
      this.validation = {
        invalid: true,
        message: "Die Summe vom Reminder muss > 0"
      };
      return;
    }

    let request = this.backendService.createTask(result.taskname, teamID, eventID, result.description,
      result.dayreminder, result.weekreminder, result.monthreminder);
      request.then((ret) => {
        if(!ret.success){
          //console.log("Database Feedback: ", ret.error);
          this.validation = {
            invalid: true,
            message: ret.error};
        } else {
          this.nav.navigateForwardParameter('viewtask', ret.data);
        }
      }, (err) => {
        console.error(err);
      });
  }

}
