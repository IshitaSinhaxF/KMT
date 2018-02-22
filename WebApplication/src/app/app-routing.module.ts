import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { AppComponent } from './app.component';
import { SummaryComponent } from './summary/summary.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
const ROUTES: Route[] = [
    { path: '', component: LoginComponent},
    { path: 'home', component: HomeComponent}
 ]
@NgModule({
    exports: [ RouterModule ],
    imports: [RouterModule.forRoot(ROUTES)]
  })
export class AppRoutingModule { }