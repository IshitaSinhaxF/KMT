import { NgModule } from '@angular/core';
import { RouterModule, Route, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SummaryComponent } from './summary/summary.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PendingForApprovalComponent } from './article/pending-for-approval/pending-for-approval.component';
import { ViewAricleComponent } from './article/view-aricle/view-aricle.component';
import { CreateArticleComponent } from './article/create-article/create-article.component';
import { PublishedComponent } from './article/published/published.component';
import { DraftArticleComponent } from './article/draft-article/draft-article.component';
const ROUTES: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
                { path: 'publishedArticles', component: PublishedComponent },
                { path: 'Pending', component: PendingForApprovalComponent },
                { path: 'Draft', component: DraftArticleComponent }
            ]
  },

  { path: 'viewArtcile', component: ViewAricleComponent },
  { path: 'createArticle', component: CreateArticleComponent },

]
@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(ROUTES)]
})
export class AppRoutingModule { }