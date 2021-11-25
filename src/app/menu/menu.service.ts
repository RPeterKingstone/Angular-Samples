import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  public populateMenuItems(username:string){
    console.log("populate Menu Items called--"+username);
    //pass this object to menu component and set it in menu.html
    //Try Promise and observable
    //Different forms module, child route, single page application - why? 
  }
}
