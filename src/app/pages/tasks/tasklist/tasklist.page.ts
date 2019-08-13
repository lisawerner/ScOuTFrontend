import { Component, OnInit } from '@angular/core';
import { NavigatorService } from 'src/app/services/navigator.service';
import { BackendService } from 'src/app/services/backend.service';
import { ReminderService } from 'src/app/services/reminder.service';


@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.page.html',
  styleUrls: ['./tasklist.page.scss'],
})
export class TasklistPage implements OnInit {

  filterByEvent: boolean;
  filterByTeam: boolean;
  teamFilter: any;
  filterNavParameter: any;


  tasksTODO: any;
  tasksFUTURE: any;
  hasEvents: boolean = false;
  hasTeams: boolean = false;

  constructor(private nav: NavigatorService, private backendService: BackendService, private reminderService: ReminderService) {  }

  ngOnInit() {
  }

  get getParams(){
    return this.nav.params;
  }

  async ionViewWillEnter(){
    if(this.isLoggedIn){
      this.tasksTODO = [];
      this.tasksFUTURE = [];
      let currentTasks = [];
      if(this.getParams !== null && this.getParams !== undefined){
        console.log("PARAMS: ", this.getParams);
        this.teamFilter = this.getParams.team;
        const filterEvent = this.getParams.event;
        if(this.getParams.event !== null){
          console.log("EVENT: ", filterEvent);
          currentTasks = await this.backendService.getTasks(filterEvent._id, '');
          this.filterByEvent = true;
          this.filterByTeam = false;
        } else if(this.getParams.team !== null){
          console.log("TEAM: ", this.teamFilter);
          currentTasks = await this.backendService.getTasks('', this.teamFilter._id);
          this.filterByTeam = true;
          this.filterByEvent = false;
          this.filterNavParameter = {team: this.teamFilter, event: null}
        } else {
          this.filterByTeam = false;
          this.filterByEvent = false;
          currentTasks = await this.backendService.getTasks('', '');
        }
      } else {
        this.filterByTeam = false;
        this.filterByEvent = false;
        currentTasks = await this.backendService.getTasks('', '');
      }

      const events = await this.backendService.getEvents('', '', false);
      this.hasEvents = events.length > 0;
      const teams = await this.backendService.getTeams('', '', true);
      this.hasTeams = teams.length > 0;

      for(let task of currentTasks){
        //console.log("TASK: ", task);
        const eventsss = await this.backendService.getEvents('', task.eventref, false);
        //console.log("EVENTSSS: ", eventsss);
        if(eventsss.length > 0){
          const event = eventsss[0];
          //console.log("EVENT: ", event);
          const teamsss = await this.backendService.getTeams('', task.eventref, true);
          const team = teamsss[0];
          if(!task.done){
            if(this.reminderService.isActive(event, task)){
              this.tasksTODO.push({task: task, team: team, event: event});
            } else {
              this.tasksFUTURE.push({task: task, team: team, event: event});
            }
          }
        }
      }
      //console.log("TODO Tasks: ", this.tasksTODO);
      //console.log("FUTURE Tasks: ", this.tasksFUTURE);
    }
  }

  get isNotLoggedIn(){
    return !this.backendService.isLoggedIn;
  }

  get isLoggedIn(){
    return this.backendService.isLoggedIn;
  }
}
