import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OktaAuthGuard, OktaCallbackComponent } from '@okta/okta-angular';
import { LogOutComponent } from './log-out/log-out.component';

const routes: Routes = [
  {path: "", component: HomeComponent, canActivate: [OktaAuthGuard]},
  {path: "login/callback", component: OktaCallbackComponent},
  {path: "sign-out", component: LogOutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
