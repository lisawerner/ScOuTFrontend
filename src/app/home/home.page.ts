import { Component } from '@angular/core';
import { NavigatorService } from '../services/navigator.service';
import { BackendService } from '../services/backend.service';
import { ReminderService } from '../services/reminder.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  tasksTODO: any;
  tasksFUTURE: any;
  events: any;
  teams: any;
  teamInvitations: any;

  username: String = '';

  constructor(private nav: NavigatorService, private back: BackendService, private reminder: ReminderService) {}

  async ionViewWillEnter(){
    if(this.back.isLoggedIn){
      this.username = await this.back.getAccount();

      this.tasksTODO = [];
      this.tasksFUTURE = [];
      const allEvents = await this.back.getEvents('', '', false);
      this.events = [];
      for(const event of allEvents){
        this.events.push(event);
        const allTasks = await this.back.getTasks(event._id.toString(), '');
        for(let task of allTasks){
          if(!task.done) {
            if(this.reminder.isActive(event, task)){
              this.tasksTODO.push(task);
            } else {
              this.tasksFUTURE.push(task);
            }
          }
        }
      }
      this.teams = await this.back.getTeams('', '', true);
      this.teamInvitations = await this.back.getTeams('', '', false);

    }
  }

}
