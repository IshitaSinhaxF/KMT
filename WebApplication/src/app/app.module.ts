import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './/app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SearchArticleComponent } from './search-article/search-article.component';
import { GetArticleComponent } from './article/get-article/get-article.component';
import { CreateArticleComponent } from './article/create-article/create-article.component';
import { SummaryComponent } from './summary/summary.component';
import { PopularTagsComponent } from './popular-tags/popular-tags.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HomeComponent } from './home/home.component';
import { PendingForApprovalComponent } from './article/pending-for-approval/pending-for-approval.component';
import { UnpulishedArticlesComponent } from './article/unpulished-articles/unpulished-articles.component';
import { RouterLink, RouterModule } from '@angular/router';
import { StorageServiceModule } from 'angular-webstorage-service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ArticleService } from './article.service';


//import {PopupModule} from 'ng2-opd-popup';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchArticleComponent,
    GetArticleComponent,
    CreateArticleComponent,
    SummaryComponent,
    PopularTagsComponent,
    HomeComponent,
    PendingForApprovalComponent,
    UnpulishedArticlesComponent,

   //AngularFontAwesomeModule
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    RouterModule,
    StorageServiceModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [
    ArticleService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
