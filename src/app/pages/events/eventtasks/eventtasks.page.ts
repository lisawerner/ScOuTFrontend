import { Component, OnInit } from '@angular/core';
import { NavigatorService } from 'src/app/services/navigator.service';
import { BackendService } from 'src/app/services/backend.service';
import { ReminderService } from 'src/app/services/reminder.service';

@Component({
  selector: 'app-eventtasks',
  templateUrl: './eventtasks.page.html',
  styleUrls: ['./eventtasks.page.scss'],
})
export class EventtasksPage implements OnInit {

  event: any;

  tasksTODO: any;
  tasksFUTURE: any;
  tasksDONE: any;

  filterNavParameter: any;

  constructor(private nav: NavigatorService, private backendservice: BackendService, private reminder: ReminderService) { }

  ngOnInit() {
  }

  async ionViewWillEnter(){
    if(this.isLoggedIn){
      this.event = this.getParams;
  
      this.filterNavParameter = {team: null, event: this.event};

      const allTasks = await this.backendservice.getTasks(this.event._id, '');
      this.tasksTODO = [];
      this.tasksFUTURE = [];
      this.tasksDONE = [];
      for(const task of allTasks){
        if(!task.done){
          if(this.reminder.isActive(this.event, task)){
            this.tasksTODO.push(task);
          } else {
            this.tasksFUTURE.push(task);
          }
        } else {
          this.tasksDONE.push(task);
        }
      }
    }
  }

  get getParams(){
    return this.nav.params;
  }

  get isLoggedIn(){
    return this.backendservice.isLoggedIn;
  }

  get isNotLoggedIn(){
    return !this.backendservice.isLoggedIn;
  }

  openLogin(){
    this.nav.navigateLogin('eventtasks');
  }

}
