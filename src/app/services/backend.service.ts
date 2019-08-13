import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private static _instance: BackendService;

  private _adress = 'https://scoutsorganization.herokuapp.com/';

  private _isLoggedIn = false;
  get isLoggedIn (){
    return this._isLoggedIn;
  }

  private _myID: string = '';
  get myID(){
    if(this._isLoggedIn){
      return this._myID;
    } else {
      return '';
    }
  }

  constructor(private http: Http) {
    // Make BackendServie as Singlton
    if (BackendService._instance) {
      return BackendService._instance;
    }
    BackendService._instance = this;
  }


  login(user: string, password: string){
    return this.makePostRequest(this._adress+'login/', {user, password})
    .then((ret: any) => {
      if(ret.success){
        this._isLoggedIn = true;
        this._myID = ret.data._id;
      }
      return ret;
    });
  }

  logout(){
    this._isLoggedIn = false;
    this._myID = '';
  }

  register(user: string, mail: string, password: string, confirmpw: string){
    return this.makePostRequest(this._adress+'register/', {user, mail, password, confirmpw})
    .then((ret: any) => {
      if(ret.success){
        this._isLoggedIn = true;
        this._myID = ret.data._id;
      }
      return ret;
    });
  }

  getAccount(){
    const memberID = this._myID;
    return this.makePostRequest(this._adress+'login/viewAccount/', {memberID})
    .then((ret: any) => {
      return ret.data;
    });
  }

  getTeams(teamID: string, eventID: string, isMember: boolean){
    const memberID = this._myID;
    return this.makePostRequest(this._adress+'teams/view/', {teamID, eventID, isMember, memberID})
    .then((ret: any) => {
      return ret.data;
    });
  }

  createTeam(teamname: string){
    const memberID = this._myID;
    return this.makePostRequest(this._adress+'teams/init/', {teamname, memberID})
    .then((ret: any) => {
      return ret;
    });
  }

  getTeamMemberlist(teamID: string){
    const memberID = this._myID;
    return this.makePostRequest(this._adress+'teams/getMemberlist/', {teamID, memberID})
    .then((ret: any) => {
      return ret.data;
    });
  }


  inviteTeammember(teamname: string, mailadress: string){
    const memberID = this._myID;
    return this.makePostRequest(this._adress+'teams/invite/', {teamname, memberID, mailadress})
    .then((ret: any) => {
      return ret;
    });
  }

  acceptTeaminvitation(teamID: string){
    const memberID = this._myID;
    return this.makePostRequest(this._adress+'teams/enter/', {teamID, memberID})
    .then((ret: any) => {
      if(ret.success){
        return ret.data;
      } else {
        //TODO: 
      }
    });
  }

  getEvents(teamID: string, eventID: string, withPast: boolean){
    const memberID = this._myID;
    return this.makePostRequest(this._adress+'events/view/', {teamID, eventID, memberID, withPast})
    .then((ret: any) => {
      return ret.data;
    });
  }

  createEvent(eventname: string, teamname: string, description: string,
    begindate: string, begintime: string, enddate: string, endtime: string, tasklist: any){
    const memberID = this._myID;
    return this.makePostRequest(this._adress+'events/init/', {eventname, teamname, description, memberID,
      begindate, begintime, enddate, endtime,
      tasklist})
    .then((ret: any) => {
      return ret;
    });
  }

  getEventOrgateam(eventID: string){
    const memberID = this._myID;
    return this.makePostRequest(this._adress+'events/getOrgateam/', {eventID, memberID})
    .then((ret: any) => {
      return ret.data;
    });
  }

  inviteOrgateam(eventID: string, teamID: string, inviteeID: string){
    const memberID = this._myID;
    return this.makePostRequest(this._adress+'events/invite/', {eventID, teamID, inviteeID, memberID})
    .then((ret: any) => {
      return ret;
    });
  }

  createTemplate(templatename: string, eventID: string, teamID: string){
    const memberID = this._myID;
    return this.makePostRequest(this._adress+'events/makeTemplate/', {templatename, eventID, teamID, memberID})
    .then((ret: any) => {
      return ret;
    });
  }

  getTemplates(templatename: string, teamID: string){
    const memberID = this._myID;
    return this.makePostRequest(this._adress+'events/getTemplates/', {templatename, teamID, memberID})
    .then((ret: any) => {
      return ret;
    });
  }

  getTasks(eventID: string, teamID: string){
    const memberID = this._myID;
    return this.makePostRequest(this._adress+'tasks/view/', {eventID, teamID, memberID})
    .then((ret: any) => {
      return ret.data;
    });
  }

  createTask(taskname: string, teamID: string, eventID: string, description: string,
    distancedays: string, distanceweeks: string, distancemonths: string){
    const memberID = this._myID;
    return this.makePostRequest(this._adress+'tasks/init/', {taskname, teamID, eventID, description, memberID,
      distancedays, distanceweeks, distancemonths})
    .then((ret: any) => {
      return ret;
    });
  }

  changeTask(taskID: string, doneValue: boolean, notice: string){
    return this.makePostRequest(this._adress+'tasks/change/', {taskID, doneValue, notice})
    .then((ret: any) => {
      return ret;
    });
  }

  private makePostRequest(url: string, data: any){
    return new Promise((resolve, reject) => {
      this.http.post(url, data)
        .subscribe(data => {
          if(data.status === 200){
            const ret = data.json();
            if(!ret.success){
              console.log("Database Feedback: ", ret.error);
            } else {
              console.log("Retriving Data:", ret.data);
            }
            return resolve(ret);
          }else{
            console.log('Request failed');
            return reject(new Error('Request failed'));
          }
        });
    });
  }
}
