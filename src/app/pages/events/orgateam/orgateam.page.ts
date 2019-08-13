import { Component, OnInit } from '@angular/core';
import { NavigatorService } from 'src/app/services/navigator.service';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-orgateam',
  templateUrl: './orgateam.page.html',
  styleUrls: ['./orgateam.page.scss'],
})
export class OrgateamPage implements OnInit {

  private invitationValidation: {invalid: Boolean, message: String};
  private successMessage: {success: Boolean, message: String};
  
  event: any;
  orgamembers: any;
  teammember: any;

  constructor(private nav: NavigatorService, private backendservice: BackendService) {
    this.invitationValidation = {
      invalid: false,
      message: ""
    };
    this.successMessage = {
      success: false,
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
      this.event = this.getParams;
      const eventID = this.event._id.toString();
      this.orgamembers = await this.backendservice.getEventOrgateam(eventID);

      const teamssss = await this.backendservice.getTeams('', eventID, true);
      const team = teamssss[0];

      const completeMemberlist = await this.backendservice.getTeamMemberlist(team._id);
      this.teammember = [];
      for(const member of completeMemberlist.memberlist){
        if(this.event.members.indexOf(member._id) < 0){
          this.teammember.push(member);
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

  orgateamPrettyPrint(){
    if(this.orgamembers !== undefined){
      let prettyPrint = '';
      for(const member of this.orgamembers){
        prettyPrint += member.name + ', ';
      }
      prettyPrint = prettyPrint.substring(0, prettyPrint.length-2);
      //console.log(prettyPrint);
      return prettyPrint;
    } else {
      return  '';
    }
  }

  openLogin(){
    this.nav.navigateLogin('eventlist');
  }

  async inviteToOrgateam(form){
    //console.log("Start Inviting Method");
    const result = form.value;
    console.log(result);
    this.invitationValidation = {
      invalid: false,
      message: ''
    };

    let request = this.backendservice.inviteOrgateam(this.event._id, this.event.teamref, result.invitee);
    request.then((ret) => {
      if(!ret.success){
        this.invitationValidation = {
          invalid: false,
          message: ret.error
        };
      } else {
        console.log('Request successfull');
        let newSelection = [];
        for(const member of this.teammember){
          if(member.name !== ret.data){
            newSelection.push(member);
          }
        }
        this.teammember = newSelection;
        this.successMessage = {
          success: true,
          message: ret.data + " wurde eingeladen."
        };
      }
    }, (err) => {
      console.log("Hier die Fehlermeldung angeben?")
      console.error(err);
    });
  }

}
