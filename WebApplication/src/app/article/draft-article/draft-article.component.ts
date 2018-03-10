import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { ArticleService } from '../../article.service';
import { Router } from '@angular/router';
import { HomeComponent } from '../../home/home.component';

@Component({
  selector: 'app-draft-article',
  templateUrl: './draft-article.component.html',
  styleUrls: ['./draft-article.component.css']
})
export class DraftArticleComponent implements OnInit {
  @Input() draftArticleData: any;
  @Output() eyeClicked = new EventEmitter();
  data: any = "";
  result: any;
  articleDetailsData: any = [];
  id: number;

  constructor(private articleService: ArticleService,private router: Router, private home: HomeComponent) { }

  ngOnInit() {
  }

  getArticleDetail(articleID) {
    this.eyeClicked.emit(false);
    this.id = articleID;
    this.articleService.saveInSessionStorage('articleID', this.id);
  }
  
  deleteArticle(articleId)
  {
    console.log('in delete');
    this.id = articleId;
    let articleToBeDeleted = {
      '_postdeletearticle': {
        'articleid': +articleId      
      }
    };

    this.articleService.DeleteArticle(articleToBeDeleted)
      .subscribe((res) => {
        alert("article deleted successfully");
        this.home.onbackToHome()
        //this.getArticleDetail(this.id);
        //this.router.navigate(['./home']);
      },
      (err) => {
        alert(err);
      }
      ); 
  }
}


