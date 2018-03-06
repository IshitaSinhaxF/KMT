import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../article.service';

@Component({
  selector: 'app-view-article-draft',
  templateUrl: './view-article-draft.component.html',
  styleUrls: ['./view-article-draft.component.css']
})
export class ViewArticleDraftComponent implements OnInit {
 
 articleID: any = this.articleService.getFromSessionStorage("articleID");
 userID: number = +this.articleService.getFromSessionStorage("UserId"); 
 userName: string = this.articleService.getFromSessionStorage("UserName");
 result:any;
 articleDetailsinDraftData:any;

  constructor(private articleService : ArticleService) { }

  ngOnInit() 
  {
this.articleService.getArticleDetailsById(this.articleID).subscribe((res: Response) => {
      this.result = res;
      this.articleDetailsinDraftData = this.result.entries.entry[0];
    })  
    
  }

  Submit() 
  {

  }

  saveChanges() 
  {

  }
}
