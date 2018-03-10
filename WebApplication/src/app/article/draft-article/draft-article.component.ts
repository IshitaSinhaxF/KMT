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

  draftResult: any ;
  userID: any = this.articleService.getFromSessionStorage('UserId');
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
        this.articleService.getDraftArticleService(this.userID).subscribe((response: Response)=>{
          this.draftResult = response;
          console.log(this.draftResult.entries.entry);
          this.draftArticleData = this.draftResult.entries.entry;
          
        })
       // this.home.onbackToHome()
        //this.getArticleDetail(this.id);
        //this.router.navigate(['./home']);
      },
      (err) => {
        alert(err);
      }
      ); 
  }
}


