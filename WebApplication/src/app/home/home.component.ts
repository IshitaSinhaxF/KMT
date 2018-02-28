import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import {Router, Routes} from '@angular/router';
import { GetArticleComponent } from '../article/get-article/get-article.component';
import { PublishedComponent } from '../article/published/published.component';
import { PendingForApprovalComponent } from '../article/pending-for-approval/pending-for-approval.component';
import { DraftArticleComponent } from '../article/draft-article/draft-article.component';
const routes: Routes = [
  {
      path: 'articles',
      component: GetArticleComponent,
      children: [
          { path: 'publishedArticles', component: PublishedComponent },
          { path: 'Pending', component: PendingForApprovalComponent },
          { path: 'Draft', component: DraftArticleComponent }
      ]
  },

  // // otherwise redirect to home
  // { path: '**', redirectTo: '' }
];
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userName :any = "";
  constructor(private articleService: ArticleService,private router: Router) { }

  ngOnInit() {

    this.userName = this.articleService.getFromSessionStorage("UserName"); 
  }

  logOut(){
    this.articleService.removeFromSessionStorage("RoleID") ;
    this.articleService.removeFromSessionStorage("UserId") ;
    this.articleService.removeFromSessionStorage("UserName") ;
    this.router.navigate(['']);
  }
}
