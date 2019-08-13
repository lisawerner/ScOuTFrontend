import { Component, OnInit } from '@angular/core';
import { NavigatorService } from 'src/app/services/navigator.service';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private validation: {invalid: Boolean, message: String};

  constructor(private nav: NavigatorService, public backendservice: BackendService) {
    this.validation = {
      invalid: false,
      message: ""};
  }

  ngOnInit() {  }

  login(form){
    const result = form.value;
    this.validation = {
      invalid: false,
      message: ""
    };
    
    if(result.email === '' || result.password === ''){
      this.validation = {
        invalid: true,
        message: "Du musst eine etwas in den Feldern der E-Mail Adresse und des Passwortes angeben."
      };
      return;
    }

    let request = this.backendservice.login(result.email, result.password);
    request.then((ret) => {
      if(!ret.success){
        //console.log("Database Feedback: ", ret.error);
        this.validation = {
          invalid: true,
          message: ret.error};
      } else {
        this.nav.navigateLeafLogin();
      }
    }, (err) => {
      console.error(err);
    });
  }
}
