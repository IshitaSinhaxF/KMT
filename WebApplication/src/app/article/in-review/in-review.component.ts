import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-in-review',
  templateUrl: './in-review.component.html',
  styleUrls: ['./in-review.component.css']
})
export class InReviewComponent implements OnInit {

  data: any = '';
  result: any;
  userID: any = this.articleService.getFromSessionStorage('UserId');
  articleDetailsData: any = [];
  id: number;

  constructor(private articleService: ArticleService, private router: Router) {
  }

  ngOnInit() {

    console.log('User Id from sesssion: ' + this.userID);
    this.userID = this.articleService.getInReviewArticleService(this.userID)
      .subscribe((res: Response) => {
        this.result = res;
        this.data = this.result.entries.entry;
        console.log(this.data);
      });
  }

  getArticleDetail(articleID) {
    this.id = articleID;
    this.articleService.saveInSessionStorage('articleID', this.id);
    this.router.navigate(['./viewArticleInReview']);
  }


}
