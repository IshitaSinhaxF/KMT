import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { ArticleService } from '../../article.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-published',
  templateUrl: './published.component.html',
  styleUrls: ['./published.component.css']
})
export class PublishedComponent implements OnInit {
@Input() publishedArticleData: any = "";
@Output() eyeClicked = new EventEmitter();
  articleDetailsData: any = [];
  id: number;
  constructor(private articleService: ArticleService, private router: Router) { }

  ngOnInit() {

  }

  getArticleDetail(articleID) {
    this.eyeClicked.emit(false);
    this.id = articleID;
    this.articleService.saveInSessionStorage("articleID", this.id);
    // this.router.navigate(['./viewArtcile']);
  }

}
