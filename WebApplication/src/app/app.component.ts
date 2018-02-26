import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { ArticleService } from './article.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';

  constructor(private articleService: ArticleService,private router: Router ){
  }
  
  
  ngOnInit(){
    this.articleService.getUserDataOnLoad();
  }
}
