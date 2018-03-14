import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { ArticleService } from '../../article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-article-in-review',
  templateUrl: './view-article-in-review.component.html',
  styleUrls: ['./view-article-in-review.component.css']
})
export class ViewArticleInReviewComponent implements OnInit {
  result: any = [];
  articleID: any = this.articleService.getFromSessionStorage("articleID");
  userID: number = +this.articleService.getFromSessionStorage("UserId");
  userName: string = this.articleService.getFromSessionStorage("UserName");
  articleinReviewDetailsData: any = [];
  buttonCondition: string;
  categoryID: number;
  @Output() backToHome = new EventEmitter;


  constructor(private articleService: ArticleService, private router: Router) { }

  ngOnInit() {
    this.articleService.getArticleDetailsById(this.articleID).subscribe((res: Response) => {
      this.result = res;
      this.articleinReviewDetailsData = this.result.entries.entry[0];
      //console.log(this.articleinReviewDetailsData);   
      if (+this.articleinReviewDetailsData.articleApproverID === +this.userID) {
        this.buttonCondition = 'true';
      }
      else {
        this.buttonCondition = 'false';
      }
    })
  }

  onbackToHome() {
    this.router.navigate(['./home']);
  }

  Approve() {
    let data =
      {
        "_postupdatearticlepublishedstate":
        {
          "article_id": +this.articleID,
          "user_id": +this.userID,
          "article_state": 'PUBLISHED',
          "username": this.userName
        }
      }

    this.articleService.updateArticleStatusToPublished(data)
      .subscribe((res) => {
        //console.log(res);
        alert("You approved the article");
        this.backToHome.emit(false);
        //this.router.navigate(['./home']);
      },
      (err) => {
        alert("Error occured approving an article");
      }
      );
  }

   logOut(){
    this.articleService.removeFromSessionStorage("Roles") ;
    this.articleService.removeFromSessionStorage("UserId") ;
    this.articleService.removeFromSessionStorage("UserName") ;
    this.router.navigate(['']);
  }

  

}
