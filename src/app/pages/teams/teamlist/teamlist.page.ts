import { Component, OnInit } from '@angular/core';
import { NavigatorService } from 'src/app/services/navigator.service';
import { BackendService } from 'src/app/services/backend.service';
import { ReminderService } from 'src/app/services/reminder.service';

@Component({
  selector: 'app-teamlist',
  templateUrl: './teamlist.page.html',
  styleUrls: ['./teamlist.page.scss'],
})
export class TeamlistPage implements OnInit {

  teams: any = [];
  invitationTeams: any = [];

  constructor(private nav: NavigatorService, private back: BackendService, private reminder: ReminderService) {}

  async ngOnInit() {
  }

  async ionViewWillEnter(){
    if(this.isLoggedIn){
      const onlyTeams = await this.back.getTeams('', '', true);
      let unsortedTeams = [];
      for(let t of onlyTeams){
        let eventslength = 0;
        let activeTaskLength = 0;
        const allEvents = await this.back.getEvents(t._id.toString(), '', false);
        for(let ev of allEvents){
          eventslength++;
          const allTasks = await this.back.getTasks(ev._id.toString(), '');
          for(const task of allTasks){
            if(!task.done){  
                if(this.reminder.isActive(ev, task)){
                  activeTaskLength++;
                }
            }
          }
        }
        unsortedTeams.push({team: t, events: eventslength, tasksTODO: activeTaskLength});
      }
      //Sort Teams
      this.teams = unsortedTeams;
      //TODO: First all Teams, with dringend Tasks
      //TODO: Then all other Teams
      //TODO: Both Lists sorted itself alphabetically

      //console.log('My Teams: ', this.teams);
      this.invitationTeams = [];
      this.invitationTeams = await this.back.getTeams('', '', false);
      //console.log('Invited Teams: ', this.invitationTeams);
    }
  }
  
  get isLoggedIn(){
    return this.back.isLoggedIn;
  }

  get isNotLoggedIn(){
    return !this.back.isLoggedIn;
  }

  openLogin(){
    this.nav.navigateLogin('teamlist');
  }

  async acceptInvitation(team: any){
    const newTeam = await this.back.acceptTeaminvitation(team._id.toString());
    this.nav.navigateForwardParameter('viewteam', newTeam);
  }

  declineInvitation(team){

  }
}
