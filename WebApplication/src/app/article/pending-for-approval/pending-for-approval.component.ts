import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { ArticleService } from '../../article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pending-for-approval',
  templateUrl: './pending-for-approval.component.html',
  styleUrls: ['./pending-for-approval.component.css']
})
export class PendingForApprovalComponent implements OnInit {
  @Input() pendingForApprovalData: any;
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
