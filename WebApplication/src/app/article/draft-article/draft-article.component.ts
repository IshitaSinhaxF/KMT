import { Component, OnInit, Input } from '@angular/core';
import { ArticleService } from '../../article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-draft-article',
  templateUrl: './draft-article.component.html',
  styleUrls: ['./draft-article.component.css']
})
export class DraftArticleComponent implements OnInit {
  @Input() draftArticleData: any;
  data: any = "";
  result: any;
  articleDetailsData: any = [];
  id: number;

  constructor(private articleService: ArticleService,private router: Router) { }

  ngOnInit() {
  }

  getArticleDetail(articleID) {
    this.id = articleID;
    this.articleService.saveInSessionStorage('articleID', this.id);
    this.router.navigate(['./viewArticleInDraft']);
  }
}


