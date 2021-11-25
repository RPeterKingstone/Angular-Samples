import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Activities } from './activities.model';
import { HomecComponent } from './homec/homec.component';
import { LogincComponent } from './loginc/loginc.component';
import { SettingsComponent } from './settings/settings.component';
import { UsertodoComponent } from './usertodo/usertodo.component';

let data: Activities;

const routes: Routes = [
  {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"login",component:LogincComponent,pathMatch:"full"},
  {path:"home",component:HomecComponent, 
  children: [
    {path:"",component:UsertodoComponent},
    {path:"user",component:UsertodoComponent},
    {path:"settings",component:SettingsComponent}
  ]},
  {path:"**",redirectTo:"login",pathMatch:"full"}]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
