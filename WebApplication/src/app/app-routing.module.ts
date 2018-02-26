import { NgModule } from '@angular/core';
import { RouterModule, Route, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SummaryComponent } from './summary/summary.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PendingForApprovalComponent } from './article/pending-for-approval/pending-for-approval.component';
const ROUTES: Routes = [
    { path: '', component: LoginComponent},
    { path: 'home', component: HomeComponent},
    { path: 'paneTwo-2', component: PendingForApprovalComponent}
 ]
@NgModule({
    exports: [ RouterModule ],
    imports: [RouterModule.forRoot(ROUTES)]
  })
export class AppRoutingModule { }