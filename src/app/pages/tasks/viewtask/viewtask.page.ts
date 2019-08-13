import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavigatorService } from 'src/app/services/navigator.service';
import { BackendService } from 'src/app/services/backend.service';
import { ReminderService } from 'src/app/services/reminder.service';

@Component({
  selector: 'app-viewtask',
  templateUrl: './viewtask.page.html',
  styleUrls: ['./viewtask.page.scss'],
})
export class ViewtaskPage implements OnInit {

  task: any;
  toggleDoneValue: boolean;
  myEvent: any;
  myTeam: any;
  active: boolean;
  reminderToString: string = '';
  statusChanged: boolean = false;
  statusChangedMessage: String = '';
  saveNotes: boolean = false;

  constructor(private atrCtrl: AlertController, private nav: NavigatorService, private backendService: BackendService,
    private reminderservice: ReminderService) { }

  get getParams(){
    return this.nav.params;
  }

  async ionViewWillEnter(){
    if(this.isLoggedIn){
      this.statusChanged = false;
      this.saveNotes = false;

      this.task = this.getParams;
      this.toggleDoneValue = this.task.done;
      const e = await this.backendService.getEvents('', this.task.eventref, true);
      this.myEvent = e[0];
      const t = await this.backendService.getTeams('', this.task.eventref, true);
      this.myTeam = t[0];
      this.active = this.reminderservice.isActive(this.myEvent, this.task);
      this.reminderToString = '';
      if(this.task.distancemonths > 0){
        if(this.task.distancemonths === 1){
          this.reminderToString = ' einen ' + this.task.distancemonths + ' Monat';
        } else {
          this.reminderToString = '' + this.task.distancemonths + ' Monaten';
        }
      } else if(this.task.distanceweeks > 0){
        if(this.task.distanceweeks === 1){
          this.reminderToString = ' eine ' + this.task.distanceweeks + ' Woche';
        } else {
          this.reminderToString = '' + this.task.distanceweeks + ' Wochen';
        }
      } else {
        if(this.task.distancedays === 1){
          this.reminderToString = ' einen ' + this.task.distancedays + ' Tag';
        } else {
          this.reminderToString = '' + this.task.distancedays + ' Tagen';
        }
      }
    }
  }

  get isNotLoggedIn(){
    return !this.backendService.isLoggedIn;
  }

  get isLoggedIn(){
    return this.backendService.isLoggedIn;
  }

  openLogin(){
    this.nav.navigateLogin('tasklist');
  }

  ngOnInit() {
  }

  async changeDone(){
    //console.log("Change Done to: ", this.toggleDoneValue);
    await this.backendService.changeTask(this.task._id, this.toggleDoneValue, this.task.notice);
    this.task.done = this.toggleDoneValue;
    this.statusChanged = true;
    if(this.task.done){
      this.statusChangedMessage = 'Der Task wurde jetzt als "erledigt" gespeichert.';
    } else {
      this.statusChangedMessage = 'Der Task wurde gerade als "unerledigt" gespeichert!'
    }
  }
  
  async changeTask(form){
    const notice = form.value.noticefield;
    //console.log('Change notice to: ', notice);
    await this.backendService.changeTask(this.task._id, this.task.done, notice);
    this.task.notice = notice;
    this.saveNotes = true;
  }

  async showConfirmAlert(){
    let alertConfirm = await this.atrCtrl.create({
      header: 'ToDo löschen',
      message: 'Bist du sicher, dass du diese Aufgabe löschen willst?',
      buttons: [
        {
          text: 'Nein',
          role: 'cancel',
          handler: () => {
            console.log('No clicked');
          }
        },
        {
          text: 'Ja',
          handler: () => {
            console.log('Yes clicked');
            //TODO: Delete Task in database!
            this.nav.navigateTasklist();
          }
        }
      ]
    });
    await alertConfirm.present();
  }
}
