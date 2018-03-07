import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../article.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view-aricle',
  templateUrl: './view-aricle.component.html',
  styleUrls: ['./view-aricle.component.css']
})
export class ViewAricleComponent implements OnInit {
 articleID: any = this.articleService.getFromSessionStorage("articleID");
 userID: number = +this.articleService.getFromSessionStorage("UserId"); 
 userName: string = this.articleService.getFromSessionStorage("UserName");
 result: any;
 articleDetailsData: any = [];
//  articleDetailsFeedbacks: any = [];
 articleFeedbackText : string;
//  txtFeedbck : any = "";
 artID: number;
 insertStatus: any;
 
 
constructor(private articleService : ArticleService, private router: Router) { 
  
}
ngOnInit() {

      this.articleService.getArticleDetailsById(this.articleID).subscribe((res: Response) => {
      this.result = res;
      this.articleDetailsData = this.result.entries.entry[0];  
    
    })    
  }

    onbackToHome() {
    this.router.navigate(['./home']);
  }

  // OnFeedbackPost()
  // {
  //    this.articleFeedbackText = this.txtFeedbck;
  //    this.artID = +this.articleDetailsData.articleID;
  //    let data = 
  //    {       
  //      "_postinsertarticlefeedback":
  //      {
  //        "rating": 3,
  //        "article_comment": this.articleFeedbackText,
  //        "article_id": this.artID,
  //        "username" : this.userName,
  //        "user_id": this.userID
  //       }                     
  //    }
  //    this.insertStatus = this.articleService.insertFeedbackPost(data);  
  //    if(this.insertStatus === "Success")
  //    {
  //      this.articleService.getArticleFeedbacks(this.articleID).subscribe((res: Response) => 
  //     {
  //     this.result = res;
  //     this.articleDetailsFeedbacks = this.result.entries.entry;
  //     //console.log(this.result)
  //     })
  //    }
  //   //console.log(this.insertStatus);        
  // }
}
