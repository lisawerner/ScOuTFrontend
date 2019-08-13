import { Component, OnInit } from '@angular/core';
import { NavigatorService } from 'src/app/services/navigator.service';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  private validation: {invalid: Boolean, message: String};

  constructor(private nav: NavigatorService, private backendService: BackendService) {
    this.validation = {
      invalid: false,
      message: ""};
  }

  ngOnInit() {
  }

  async register(form) {
    const result = form.value;
    this.validation = {
      invalid: false,
      message: ""
    };

    if(result.password === '' || result.confirm === '' || result.name === '' || result.email === ''){
      this.validation = {
        invalid: true,
        message: "Deine Eingabe ist nicht vollständig"};
    } else {
      if(result.password !== result.confirm){
        this.validation = {
          invalid: true,
          message: "Die Passworteingabe stimmt nicht überein"};
      } else {
        let request = this.backendService.register(result.name, result.email, result.password, result.confirm);
        request.then((ret) => {
          if(!ret.success){
            console.log("Database Feedback: ", ret.error);
            this.validation = {
              invalid: true,
              message: ret.error};
          } else {
            this.nav.navigateForward('tutorialmenu');
          }
        }, (err) => {
          console.error(err);
        })
      }
    }

  }
}
