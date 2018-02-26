import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userName :any = "";
  constructor(private articleService: ArticleService) { }

  ngOnInit() {

   this.userName = this.articleService.getFromSessionStorage("UserName"); 
  }

}
