import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogincComponent } from './loginc/loginc.component';
import { HomecComponent } from './homec/homec.component';
import { RestapiService } from './restapi.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { SettingsComponent } from './settings/settings.component';
import { UsertodoComponent } from './usertodo/usertodo.component';

@NgModule({
  declarations: [
    AppComponent,
    LogincComponent,
    HomecComponent,
    MenuComponent,
    SettingsComponent,
    UsertodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [RestapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
