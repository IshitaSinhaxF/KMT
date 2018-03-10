import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ArticleService } from '../article.service';
import { Router, Routes } from '@angular/router';
import { SearchArticleComponent } from '../search-article/search-article.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userName: any = "";
  roles: any = [];
  hideCreateArticle: boolean = false;
  showAddButton: boolean = true;
  showHomeButton: boolean = false;
  searchedInfo: boolean = true;
  hideViewArticle: boolean = false;
  hideReviewArticle: boolean = false;
  hidePendingArticle: boolean = false;
  hideDraftArticle: boolean = false;
  hideArticleMenu: boolean = true;

  constructor(private articleService: ArticleService, private router: Router) { }

  ngOnInit() {

    if (this.articleService.getFromSessionStorage("UserName") == 'no data')
      this.router.navigate(['']);

    else {
      if (this.articleService == null) {
        console.log("Login to append user name")
      } else {
        this.userName = this.articleService.getFromSessionStorage("UserName");
        this.roles = this.articleService.getFromSessionStorage("Roles");
        // console.log("roles:")
        // console.log(this.roles);
      }
    }

  }
  hideArticle(event) {
    this.hideArticleMenu = event;
    this.hideViewArticle = false;
    this.hideReviewArticle = false;
    this.hidePendingArticle = false;
    this.hideDraftArticle = false;
    this.hideCreateArticle = false;
    this.showAddButton = event;
    this.showHomeButton = false;
  }

  createNewArticle() {
    this.hideArticleMenu = false;
    this.hideViewArticle = false;
    this.hideReviewArticle = false;
    this.hidePendingArticle = false;
    this.hideDraftArticle = false;
    this.hideCreateArticle = true;
    this.showAddButton = false;
    this.showHomeButton = true;
  }
  onbackToHome() {
    console.log('called home');
    this.hideArticleMenu = true;
    this.hideViewArticle = false;
    this.hideReviewArticle = false;
    this.hidePendingArticle = false;
    this.hideDraftArticle = false;
    this.hideCreateArticle = false;
    this.showAddButton = true;
    this.showHomeButton = false;
  }
  showFeedback(event) {
    this.hideArticleMenu = false;
    this.hideViewArticle = true;
    this.hideReviewArticle = false;
    this.hidePendingArticle = false;
    this.hideDraftArticle = false;
    this.hideCreateArticle = false;
    this.showAddButton = false;
    this.showHomeButton = true;
  }

  showReviewFeedback(event) {
    this.hideArticleMenu = false;
    this.hideViewArticle = false;
    this.hideReviewArticle = true;
    this.hidePendingArticle = false;
    this.hideDraftArticle = false;
    this.hideCreateArticle = false;
    this.showAddButton = false;
    this.showHomeButton = true;
  }

  showDraftFeedback() {
    this.hideArticleMenu = false;
    this.hideViewArticle = false;
    this.hideReviewArticle = false;
    this.hidePendingArticle = false;
    this.hideDraftArticle = true;
    this.hideCreateArticle = false;
    this.showAddButton = false;
    this.showHomeButton = true;
  }

  showPendingArticleFeedback() {
    this.hideArticleMenu = false;
    this.hideViewArticle = false;
    this.hideReviewArticle = false;
    this.hidePendingArticle = true;;
    this.hideDraftArticle = false;
    this.hideCreateArticle = false;
    this.showAddButton = false;
    this.showHomeButton = true;
  }

  showHomeAfterSave(event) {
    this.onbackToHome();
  }
  logOut() {
    this.articleService.removeFromSessionStorage("Roles");
    this.articleService.removeFromSessionStorage("UserId");
    this.articleService.removeFromSessionStorage("UserName");
    this.router.navigate(['']);
  }
}
