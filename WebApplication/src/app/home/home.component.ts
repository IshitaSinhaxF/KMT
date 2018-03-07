import { Component, OnInit, ViewChild } from '@angular/core';
import { ArticleService } from '../article.service';
import {Router, Routes} from '@angular/router';
import { SearchArticleComponent } from '../search-article/search-article.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //@ViewChild(SearchArticleComponent) private searchArticle : SearchArticleComponent;
  userName :any = "";
  roles: any = [];
  hide: boolean=true;
  searchedInfo : boolean =true;
  constructor(private articleService: ArticleService,private router: Router) { }

  ngOnInit() {
 
    if(this.articleService.getFromSessionStorage("UserName") =='no data')
      this.router.navigate(['']);
      
    else{
        if(this.articleService == null){
          console.log("Login to append user name")
        }else{
          this.userName = this.articleService.getFromSessionStorage("UserName"); 
          this.roles = this.articleService.getFromSessionStorage("Roles"); 
          // console.log("roles:")
          // console.log(this.roles);
     }
     }
   
  }
  hideArticle(event) {
    this.hide = event;
  }
  SearchData(){
   
    //this.hideArticles = true
  }
  logOut(){
    this.articleService.removeFromSessionStorage("Roles") ;
    this.articleService.removeFromSessionStorage("UserId") ;
    this.articleService.removeFromSessionStorage("UserName") ;
    this.router.navigate(['']);
  }
}
