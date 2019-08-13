import { Component, OnInit } from '@angular/core';
import { NavigatorService } from 'src/app/services/navigator.service';
import { BackendService } from 'src/app/services/backend.service';
import { ReminderService } from 'src/app/services/reminder.service';

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.page.html',
  styleUrls: ['./eventlist.page.scss'],
})
export class EventlistPage implements OnInit {

  events: any;
  pastEvents: any;
  hasTeams: boolean = false;

  filteredByTeam: boolean = false;
  teamname: String;

  constructor(private nav: NavigatorService, private backendservice: BackendService, private reminder: ReminderService) { }

  ngOnInit() {
  }

  get getParams(){
    return this.nav.params;
  }

  async ionViewWillEnter(){
    if(this.isLoggedIn){
      this.filteredByTeam = false;

      let resultEvents = null;
      if(this.getParams !== null){
        //Filtered by a Team!
        const teamID = this.getParams._id.toString();
        this.teamname = this.getParams.name;
        resultEvents = await this.backendservice.getEvents(teamID, '', true);
        this.filteredByTeam = true;
        this.hasTeams = true;
      } else {
        resultEvents = await this.backendservice.getEvents('', '', true);
        const allTeams = await this.backendservice.getTeams('', '', true);
        this.hasTeams = allTeams.length > 0;
      }
      this.events = [];
      this.pastEvents = [];
      for(let ev of resultEvents){
        if(!this.reminder.isPast(ev)){
          const eventID = ev._id.toString();
          const teameventArray = await this.backendservice.getTeams('', eventID, true);
          const teamevent = teameventArray[0];
          const allTasks = await this.backendservice.getTasks(eventID, '');
          let activeTasks = [];
          let futureTasks = [];
          for(const task of allTasks){
            if(!task.done){
              if(this.reminder.isActive(ev, task)){
                activeTasks.push(task);
              } else {
                futureTasks.push(task);
              }
            }
          }
          this.events.push({event: ev, team: teamevent, tasks: activeTasks, futureTasks: futureTasks});
        } else {
          this.pastEvents.push(ev);
        }
        
      }
    }
  }

  get isLoggedIn(){
    return this.backendservice.isLoggedIn;
  }

  get isNotLoggedIn(){
    return !this.backendservice.isLoggedIn;
  }

  openLogin(){
    this.nav.navigateLogin('eventlist');
  }
}
