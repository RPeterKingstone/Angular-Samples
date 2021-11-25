import { Component, Input, OnInit } from '@angular/core';
import { Activities } from '../activities.model';
import { RestapiService } from '../restapi.service';
import {ActivatedRoute, Navigation, Router} from "@angular/router";

@Component({
  selector: 'app-homec',
  templateUrl: './homec.component.html',
  styleUrls: ['./homec.component.css']
})
export class HomecComponent implements OnInit {

 //@Input("activityid") activityid: string | undefined;

public activity: Activities | undefined;
activityid!: string | undefined;
name!: string | undefined;
average!: string | undefined;
steps!: string | undefined;

userName!: string | undefined;



  constructor(private service:RestapiService,private route: ActivatedRoute,private router: Router) { 
    
    let nav: Navigation | null = this.router.getCurrentNavigation();
    if(nav){
    if(nav.extras && nav.extras.state && nav.extras.state.activity){
    //nav.extras.state.activity.subscribe((data1: Activities)=>
      //{
        this.activity = nav.extras.state.activity;
        this.activityid = this.activity!.activityid;
        this.name = this.activity!.name;
        this.average = this.activity!.averagetime;
        this.steps = this.activity!.stepsneeded;
        this.userName = this.activity!.userName;
        console.log("in home c ---- "+this.userName);
      //});

    }
  }
  }

  ngOnInit(): void {
    
  }

  

}
