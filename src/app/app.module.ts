import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DevelopmentComponent } from './development/development.component';
import { RunningprojectComponent } from './runningproject/runningproject.component';
import { DefaultformComponent } from './defaultform/defaultform.component';
import {SendDataService} from './send-data.service'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    DevelopmentComponent,
    RunningprojectComponent,
    DefaultformComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,
    RouterModule.forRoot([
      {
        path:'development',
        component:DevelopmentComponent
      },
      {
        path:'runningproject',
        component:RunningprojectComponent
      },
      { path: 'development/defaultform', component: DefaultformComponent },
    ])
  ],
  providers: [SendDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
