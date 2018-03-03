import { NgModule } from '@angular/core';
import { RouterModule, Route, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SummaryComponent } from './summary/summary.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PendingForApprovalComponent } from './article/pending-for-approval/pending-for-approval.component';
import { ViewAricleComponent } from './article/view-aricle/view-aricle.component';
import {ArticleFeedbackComponent} from './article/article-feedback/article-feedback.component';
const ROUTES: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'home', component: HomeComponent,
  },

  { path: 'viewArtcile',
   component: ViewAricleComponent ,
   children:[
     {
       path:'articleFeedback',
       component: ArticleFeedbackComponent
     }
   ]


},

]
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(ROUTES)]
})
export class AppRoutingModule { }