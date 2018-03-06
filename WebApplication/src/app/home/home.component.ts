import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import {Router, Routes} from '@angular/router';
import { GetArticleComponent } from '../article/get-article/get-article.component';
import { PublishedComponent } from '../article/published/published.component';
import { PendingForApprovalComponent } from '../article/pending-for-approval/pending-for-approval.component';
import { DraftArticleComponent } from '../article/draft-article/draft-article.component';
// const routes: Routes = [
//   {
//       path: '',
//       component: GetArticleComponent,
//       children: [
//           { path: 'publishedArticles', component: PublishedComponent },
//           { path: 'Pending', component: PendingForApprovalComponent },
//           { path: 'Draft', component: DraftArticleComponent }
//       ]
//   },

  // // otherwise redirect to home
  // { path: '**', redirectTo: '' }
// ];
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userName :any = "";
  roles: any = [];
  constructor(private articleService: ArticleService,private router: Router) { }

  ngOnInit() {
     if(this.articleService == null){
      console.log("Login to append user name")
     }else{
      this.userName = this.articleService.getFromSessionStorage("UserName"); 
      this.roles = this.articleService.getFromSessionStorage("Roles"); 
      // console.log("roles:")
      // console.log(this.roles);
    
     }
   
  }

  logOut(){
    this.articleService.removeFromSessionStorage("Roles") ;
    this.articleService.removeFromSessionStorage("UserId") ;
    this.articleService.removeFromSessionStorage("UserName") ;
    this.router.navigate(['']);
  }
}
