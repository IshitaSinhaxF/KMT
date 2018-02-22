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
    //AngularFontAwesomeModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
