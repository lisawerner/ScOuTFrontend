import { Component, OnInit } from '@angular/core';
import { NavigatorService } from 'src/app/services/navigator.service';
import { BackendService } from 'src/app/services/backend.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-viewteammember',
  templateUrl: './viewteammember.page.html',
  styleUrls: ['./viewteammember.page.scss'],
})
export class ViewteammemberPage implements OnInit {

  private validation: {invalid: Boolean, message: String};

  team: any;
  memberlist: any;
  invitationMessage: String ='';

  constructor(private nav: NavigatorService, private backendservice: BackendService, public toastController: ToastController) {
    this.validation = {
      invalid: false,
      message: ""};
   }

  ngOnInit() {
  }

  get getParams(){
    return this.nav.params;
  }

  async ionViewWillEnter(){
    this.team = this.getParams;
    this.memberlist = await this.backendservice.getTeamMemberlist(this.team._id.toString());
  }

  async invite(form) {
    const result = form.value.email;
    this.validation = {
      invalid: false,
      message: ""};
    
    if(result === ''){
      this.validation = {
        invalid: true,
        message: "Die Eingabe ist nicht vollständig"};
      return;
    }

    let request = this.backendservice.inviteTeammember(this.team.name, result);
    request.then((ret) => {
      if(!ret.success){
        //console.log("Database Feedback: ", ret.error);
        this.validation = {
          invalid: true,
          message: ret.error};
      } else {
        this.invitationMessage = result + ' wurde eingeladen.';
      }
    }, (err) => {
      console.error(err);
    });
  }
  async presentToast(email: string) {
    const toast = await this.toastController.create({
      message: '"'+email+'" wurde in '+this.team.name+' eingeladen',
      duration: 2000
    });
    toast.present();
  }

  get isLoggedIn(){
    return this.backendservice.isLoggedIn;
  }

  get isNotLoggedIn(){
    return !this.backendservice.isLoggedIn;
  }

  openLogin(){
    this.nav.navigateLogin('teamlist');
  }

}
