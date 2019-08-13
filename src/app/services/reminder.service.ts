import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReminderService {

  constructor() { }

    isActive(event: any, task: any){
      //Get current Time
      const now = new Date();
      now.setHours(0,0,0);
      //console.log("Date now: ", now.toJSON());
      
      //Construct Eventbegin
      const beginDAY = event.begindate.substring(8, 10);
      const beginMONTH = event.begindate.substring(5, 7);
      const beginYEAR = event.begindate.substring(0, 4);
      const beginDate = new Date();
      beginDate.setHours(0,0,0);
      beginDate.setFullYear(beginYEAR, beginMONTH-1, beginDAY);
      //console.log("Eventbegin as Date: ", beginDate.toJSON());
      
      //Substract ActivationDifference from eventbegin
      const activationDate = beginDate;
      activationDate.setDate(activationDate.getDate() - task.distancedays);
      activationDate.setDate(activationDate.getDate() - (task.distanceweeks*7));
      activationDate.setDate(activationDate.getDate() - (task.distancemonths*30));
      //console.log("Activation Day:", activationDate.toJSON());

      const activ = now >= activationDate;
      //console.log("Fazit: Task ist aktiv=", activ);
      return activ;
    }

    isPast(event: any){
      //Get current Time
      const now = new Date();
      now.setHours(0,0,0);
      //console.log("Date now: ", now.toJSON());
      
      //Construct Eventbegin
      const endDAY = event.enddate.substring(8, 10);
      const endMONTH = event.enddate.substring(5, 7);
      const endYEAR = event.enddate.substring(0, 4);
      const endDate = new Date();
      endDate.setHours(0,0,0);
      endDate.setFullYear(endYEAR, endMONTH-1, endDAY);
      //console.log("Eventbegin as Date: ", beginDate.toJSON());
      
      const past = now > endDate;
      //console.log("Fazit: Task ist aktiv=", activ);
      return past;
    }

}
