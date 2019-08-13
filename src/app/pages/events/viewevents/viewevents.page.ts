import { Component, OnInit } from '@angular/core';
import { NavigatorService } from 'src/app/services/navigator.service';
import { BackendService } from 'src/app/services/backend.service';
import { ReminderService } from 'src/app/services/reminder.service';

@Component({
  selector: 'app-viewevents',
  templateUrl: './viewevents.page.html',
  styleUrls: ['./viewevents.page.scss'],
})
export class VieweventsPage implements OnInit {

  private templateValidation: {invalid: Boolean, message: String};
  private success: Boolean = false;
  
  event: any;
  team: any;
  tasksTODO: any;
  tasksFUTURE: any;
  tasksDONE: any;

  constructor(private nav:NavigatorService, private backendservice: BackendService, private reminder: ReminderService) {
    this.templateValidation = {
      invalid: false,
      message: ""
    };
   }

  ngOnInit() {
  }

  get getParams(){
    return this.nav.params;
  }

  async ionViewWillEnter(){
    if(this.isLoggedIn){
      //console.log("Enter params of event:", this.getParams)
      this.event = this.getParams;

      const eventID = this.event._id.toString();
      const teamssss = await this.backendservice.getTeams('', eventID, true);
      this.team = teamssss[0];


      const allTasks = await this.backendservice.getTasks(eventID, '');
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

  async changeDone(task){
    //console.log("Change Done to: 'true'");
    task.done = true;
    await this.backendservice.changeTask(task._id, true, task.notice);
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

  createTemplate(form){
    this.templateValidation = {
      invalid: false,
      message: ""};

    const templatename = form.value.templatename;
    console.log(templatename);
    let request = this.backendservice.createTemplate(templatename, this.event._id, this.event.teamref);
    request.then((ret) => {
      if(!ret.success){
        //console.log("Database Feedback: ", ret.error);
        this.templateValidation = {
          invalid: true,
          message: ret.error
        };
      } else {
        this.success = true;
      }
    }, (err) => {
      console.error(err);
    });
  }
}
