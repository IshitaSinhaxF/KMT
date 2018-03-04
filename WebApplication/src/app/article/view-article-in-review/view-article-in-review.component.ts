import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../article.service';

@Component({
  selector: 'app-view-article-in-review',
  templateUrl: './view-article-in-review.component.html',
  styleUrls: ['./view-article-in-review.component.css']
})
export class ViewArticleInReviewComponent implements OnInit {
result:any = [];
 articleID: any = this.articleService.getFromSessionStorage("articleID");
 userID: number = +this.articleService.getFromSessionStorage("UserId"); 
 userName: string = this.articleService.getFromSessionStorage("UserName");
 articleinReviewDetailsData: any = [];
 buttonCondition:string;

  constructor(private articleService : ArticleService ) { }

  ngOnInit() {
    this.articleService.getArticleDetailsById(this.articleID).subscribe((res: Response) => {
      this.result = res;
      this.articleinReviewDetailsData = this.result.entries.entry[0];

      if(this.articleinReviewDetailsData.approver_name === this.userName)
      {
        this.buttonCondition = 'true';        
      }
      else
      this.buttonCondition = 'false';
      console.log(this.buttonCondition);
    })
  }

}
