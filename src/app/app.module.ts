import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import OktaAuth from '@okta/okta-auth-js';
import { environment } from '../environments/environment';
import { OktaAuthModule } from '@okta/okta-angular';
import { HomeComponent } from './home/home.component';
import { LogOutComponent } from './log-out/log-out.component';

const oktaAuth = new OktaAuth({
  clientId: environment.clientId,
  issuer: environment.issuer,
  redirectUri: environment.redirectUri,
  postLogoutRedirectUri: environment.postLogoutUri
})
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogOutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OktaAuthModule.forRoot({oktaAuth})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
