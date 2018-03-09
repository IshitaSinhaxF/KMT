import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { ArticleService } from '../../article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-in-review',
  templateUrl: './in-review.component.html',
  styleUrls: ['./in-review.component.css']
})
export class InReviewComponent implements OnInit {
@Input() inReviewArticle : any = "";
@Output() eyeClicked = new EventEmitter();

  articleDetailsData: any = [];
  id: number;
  constructor(private articleService: ArticleService, private router: Router) {
  }

  ngOnInit() {

  }

  getArticleDetail(articleID) {
    this.eyeClicked.emit(false);
    this.id = articleID;
    this.articleService.saveInSessionStorage('articleID', this.id);
  }


}
