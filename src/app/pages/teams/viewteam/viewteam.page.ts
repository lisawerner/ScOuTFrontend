import { Component, OnInit } from '@angular/core';
import { NavigatorService } from 'src/app/services/navigator.service';
import { BackendService } from 'src/app/services/backend.service';
import { ReminderService } from 'src/app/services/reminder.service';

@Component({
  selector: 'app-viewteam',
  templateUrl: './viewteam.page.html',
  styleUrls: ['./viewteam.page.scss'],
})
export class ViewteamPage implements OnInit {
  
  team: any = [];

  myEvents: any = [];
  myPastEvents: any;

  myTasksLength: number;

  constructor(private nav: NavigatorService, private back: BackendService, private reminder: ReminderService) {  }

  ngOnInit() {  }

  get getParams(){
    return this.nav.params;
  }

  async ionViewWillEnter(){
    if(this.isLoggedIn){
      this.team = this.getParams;
      this.myEvents = []
      this.myPastEvents = [];
      const events = await this.back.getEvents(this.team._id, '', true);
      this.myTasksLength = 0;
      for(let event of events){
        if(this.reminder.isPast(event)){
          this.myPastEvents.push(event);
        } else {
          if(event.members.includes(this.back.myID)){
            const allTasks = await this.back.getTasks(event._id, '');
            let activeLength = 0;
            for(const task of allTasks){
              if(!task.done){
                if(this.reminder.isActive(event, task)){
                  activeLength++;
                }
              }
            }
            this.myTasksLength = this.myTasksLength + activeLength;
            this.myEvents.push({event: event, tasksLength: activeLength});
          }
        }
      }
    }
  }

  get isNotLoggedIn(){
    return !this.back.isLoggedIn;
  }

  get isLoggedIn(){
    return this.back.isLoggedIn;
  }

  openLogin(){
    this.nav.navigateLogin('teamlist');
  }
  
}
