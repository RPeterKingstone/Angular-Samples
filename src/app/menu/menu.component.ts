import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

routes = [
  {link:"user", name: "User Todo"},
  {link:"settings", name: "User Settings"}
]
userRoute = "user";
settingsRoute = "settings";

  @Input('userName') userName: string | undefined;
  currentDate: string | undefined;

  constructor() { 

    console.log("Debug messages to troubleshoot development issue");

  setInterval(() => {
    let localdate = new Date();
    this.currentDate = localdate.toDateString() + ' ' + localdate.toLocaleTimeString();
  }, 1000)

    
    
  }

  ngOnInit(): void {
  }

}
