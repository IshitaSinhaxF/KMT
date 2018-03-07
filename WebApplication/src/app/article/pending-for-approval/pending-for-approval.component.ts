import { Component, OnInit, Input } from '@angular/core';
import { ArticleService } from '../../article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pending-for-approval',
  templateUrl: './pending-for-approval.component.html',
  styleUrls: ['./pending-for-approval.component.css']
})
export class PendingForApprovalComponent implements OnInit {
  @Input() pendingForApprovalData: any;

  articleDetailsData: any = [];
  id: number;
  constructor(private articleService: ArticleService, private router: Router) {
  }

  ngOnInit() {
  }

  getArticleDetail(articleID) {
    this.id = articleID;
    this.articleService.saveInSessionStorage('articleID', this.id);
    this.router.navigate(['./viewArticleInReview']);
  }


}
