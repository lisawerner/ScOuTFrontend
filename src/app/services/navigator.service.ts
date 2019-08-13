import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class NavigatorService {

  private _beforeLogin: string = '';
  private _params: any;
  get params(){
    return this._params;
  }
  private _stack: any[] = [];

  constructor(private nav: NavController) { }

  goBack(){
    //console.log("Stack before goBack()", this._stack);
    this._params = null;
    if(this._stack.length <= 0){
      //console.log("Stack was empty: Move to home")
      this.nav.navigateForward('home');
    } else {
      const back = this._stack.pop();
      //console.log("Stack was not Empty, move to: ", back);
      if(back.parameters === null){
        //console.log("Move without params");
        this.nav.navigateForward(back.source)
      } else {
        this._params = back.parameters;
        //console.log("Move with params: ", this._params);
        this.nav.navigateForward(back.source);
      }
    }
  }

  navigateForward(target){
    this._params = null;
    this._stack.push({source: target, parameters: null});
    //console.log("New Nav Stack: ", this._stack);
    this.nav.navigateForward(target);
  }

  navigateForwardParameter(target, params){
    this._params = params;
    this._stack.push({source: target, parameters: params});
    //console.log("New Nav Stack: ", this._stack);
    this.nav.navigateForward(target);
  }
  
  navigateHome(){
    this._stack = [];
    this.navigateForward('home');
  }

  navigateLogin(source){
    this._beforeLogin = source;
    this.navigateForward('login');
  }

  navigateLeafLogin(){
    if(this._beforeLogin === ''){
      this.navigateHome();
    } else {
      this.navigateForward(this._beforeLogin);
      this._beforeLogin = '';
    }
  }

  navigateTasklist(){
    this.navigateForward('tasklist');
  }

  navigateEventlist(){
    this.navigateForward('eventlist');
  }

  navigateTeamlist(){
    this.navigateForward('teamlist');
  }


}
