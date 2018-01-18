import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

import {FormsModule} from '@angular/forms';

import {ProfileService} from './services/profile.service';
import {LandingService} from './services/landing.service';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { LandingComponent } from './landing/landing.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
//defining routes
const routes:Routes=[
  {path:"landing",component: LandingComponent},
  {path:"profile",component: ProfileComponent},
  {path:"",redirectTo:"/landing",pathMatch:"full"},
  {path:'**', component:NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LandingComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProfileService,LandingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
