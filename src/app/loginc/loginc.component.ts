import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Activities } from '../activities.model';
import { RestapiService } from '../restapi.service';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-loginc',
  templateUrl: './loginc.component.html',
  styleUrls: ['./loginc.component.css']
})
export class LogincComponent implements OnInit {

  username!:string;
  password!: string;
  message:any 

  constructor(private service:RestapiService, private router:Router) { }

  ngOnInit(): void {
  }

  performLogin(){
    let res = this.service.login(this.username,this.password).pipe(
    map((response: Activities) => {
      let activity = new Activities(response);
      activity = response;
      console.log("Printing response--"+response.activityid);
      console.log("Printing newly set object--"+activity.activityid);
      return activity;
    }));
    console.log("Got Activity Response--");
    res.subscribe((data: Activities)=>{
      console.log(data.activityid);
      data.userName = this.username;
      this.router.navigate(['/home'],{state: {activity: data}});
    })
}
}
