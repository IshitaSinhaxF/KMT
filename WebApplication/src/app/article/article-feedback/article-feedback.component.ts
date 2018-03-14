import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../article.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-article-feedback',
  templateUrl: './article-feedback.component.html',
  styleUrls: ['./article-feedback.component.css']
})
export class ArticleFeedbackComponent implements OnInit {
  articleID: any = this.articleService.getFromSessionStorage("articleID");
  userID: number = +this.articleService.getFromSessionStorage("UserId");
  userName: string = this.articleService.getFromSessionStorage("UserName");
  result: any;
  articleDetailsFeedbacks: any = [];
  articleFeedbackText: string;
  txtFeedbck: any = "";
  artID: number;
  insertStatus: string;
  

  constructor(private articleService: ArticleService, private router: Router) { }

  ngOnInit() {
    this.getArticleFeedback();
  }

  getArticleFeedback() {
    //console.log('calling getArticleFeedback()')
    this.articleService.getArticleFeedbacks(this.articleID).subscribe((res: Response) => {
      this.result = res;
      this.articleDetailsFeedbacks = this.result.entries.entry;   
        
    })
  }

  // OnFeedbackPost() {
    
  //   this.articleFeedbackText = this.txtFeedbck;
  //   this.artID = +this.articleID;
    
  //   let data =
  //     {
  //       "_postinsertarticlefeedback":
  //       {
  //         "rating": 3,
  //         "article_comment": this.articleFeedbackText,
  //         "article_id": this.artID,
  //         "username": this.userName,
  //         "user_id": this.userID
  //       }
  //     }

  //   //this.insertStatus = 
  //   this.articleService.insertFeedbackPost(data);

  //  // console.log(this.insertStatus);
  //  // if (this.insertStatus === "succeed") {
  //  //   console.log('calling getArticleFeedback() after insert')
  //  //   this.getArticleFeedback();
  //  // }
  // }

}
