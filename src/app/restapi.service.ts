import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Activities } from './activities.model';
import { MenuService } from './menu/menu.service';


@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(private http:HttpClient, private menuService:MenuService) { }

  public login(username:string,password:string){
    this.menuService.populateMenuItems(username);2
    const headers = new HttpHeaders({Authorization:'Basic'+btoa(username+":"+password)}).set('Content-Type', 'text/plain; charset=utf-8')
    return this.http.get<Activities>("http://localhost:8085/angular/123")
     }
  public getUsers(username:string,password:string){
    const headers = new HttpHeaders({Authorization:'Basic'+btoa(username+":"+password)})
    return this.http.get("http://localhost:8082/users-ws/users/status/check",{headers,responseType:'text' as 'json'})
  }
}
