import { Component, OnInit } from '@angular/core';
import { NavigatorService } from 'src/app/services/navigator.service';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-createevent',
  templateUrl: './createevent.page.html',
  styleUrls: ['./createevent.page.scss'],
})
export class CreateeventPage implements OnInit {

  validation: {invalid: Boolean, message: String};

  minDate: any;
  maxDate: any;

  teams: any;
  //
  template: any;
  teamname: String;
  templateDescription: String;

  constructor(private nav:NavigatorService, private back: BackendService) {
    this.validation = {
      invalid: false,
      message: ""};
   }

  ngOnInit() {
  }

  get getParams(){
    return this.nav.params;
  }

  async ionViewWillEnter(){
    this.templateDescription = "";
    
    const today = new Date();//moment.utc().startOf('day').format('YYYY-MM-DD');
    const dd = today.getDate();
    const mm = today.getMonth() + 1; //because January is 0! 
    const yyyy = today.getFullYear();
    const maxyyyy = yyyy+10;
    this.minDate = yyyy + "-";
    this.maxDate = maxyyyy + "-12-28";
    if(mm < 10){
      this.minDate += '0' + mm + "-";
    } else {
      this.minDate += mm + "-";
    }
    if (dd < 10) {
      this.minDate += '0' + dd;
    } else {
      this.minDate += dd;
    }
    console.log(this.minDate);

    this.teams = [];
    if(this.isLoggedIn){
      console.log("Diese Parameter kommen an: ", this.getParams);
      if(this.getParams === null || this.getParams === undefined){
        console.log("Erstelle Event ohne Templte")
        this.teams = await this.back.getTeams('', '', true);
      } else {
        console.log("Erstelle Event aufgrund eines Templates")
        this.template = this.getParams.template;
        this.teamname = this.getParams.team;
        this.templateDescription = this.getParams.template.description;
      }
    }
  }

  get isLoggedIn(){
    return this.back.isLoggedIn;
  }

  get isNotLoggedIn(){
    return !this.back.isLoggedIn;
  }

  openLogin(){
    this.nav.navigateLogin('eventlist');
  }

  async saveNewEvent(form) {
    this.validation = {
      invalid: false,
      message: ""
    };

    const result = form.value;
    //console.log(result);
    const eventname = result.eventname;
    if(eventname === ''){
      this.validation = {
        invalid: true,
        message: "Du musst einen Namen für das Event eingeben!"
      };
      return;
    }
    let teamname = result.teamname;
    let tasklist = [];
    if(this.template !== undefined && this.template !== null){
      teamname = this.teamname;
      tasklist = this.template.tasks;
    }
    if(teamname === ''){
      this.validation = {
        invalid: true,
        message: "Du musst ein Team auswählen!"
      };
      return;
    }

    const begindate = result.eventbegin.substring(0, 10);
    const begintime = result.eventbegin.substring(11, 16);
    if(begindate === ''){
      this.validation = {
        invalid: true,
        message: "Die Eingabe vom Beginn des Events fehlt!"
      };
      return;
    }
    const enddate = result.eventend.substring(0, 10);
    const endtime = result.eventend.substring(11, 16);
    if(enddate === ''){
      this.validation = {
        invalid: true,
        message: "Die Eingabe vom Ende des Events fehlt!"
      };
      return;
    }

    let request = this.back.createEvent(eventname, teamname, result.eventdescription,
    begindate, begintime, enddate, endtime, tasklist);
    request.then((ret) => {
      if(!ret.success){
        //console.log("Database Feedback: ", ret.error);
        this.validation = {
          invalid: true,
          message: ret.error};
      } else {
        //console.log(ret.data)
        this.nav.navigateForwardParameter('viewevent', ret.data);
      }
    }, (err) => {
      console.error(err);
    });

  }
}
