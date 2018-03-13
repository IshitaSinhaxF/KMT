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
  articleDetailsFeedbacks: any = [];
  articleFeedbackText: string;
  rating: number;
  txtFeedbck : any ;
  currentRate: number;
  artID: number;
  insertStatus: any;


  constructor(private articleService: ArticleService, private router: Router) {
  }

  ngOnInit() {

    this.articleService.getArticleDetailsById(this.articleID).subscribe((res: Response) => {
      this.result = res;
      this.articleDetailsData = this.result.entries.entry[0];
      console.log(this.articleDetailsData);
      this.getArticleFeedback();
    })
  }
   getArticleFeedback() {
    console.log('calling getArticleFeedback()')
    this.articleService.getArticleFeedbacks(this.articleID).subscribe((res: Response) => {
      this.result = res;
      this.articleDetailsFeedbacks = this.result.entries.entry;      
    })
  }

  onbackToHome() {
    this.router.navigate(['./home']);
  }

 logOut(){
    this.articleService.removeFromSessionStorage("Roles") ;
    this.articleService.removeFromSessionStorage("UserId") ;
    this.articleService.removeFromSessionStorage("UserName") ;
    this.router.navigate(['']);
  }

  //   OnFeedbackPost() {
    
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
  //     this.articleDetailsFeedbacks = this.articleService.insertFeedbackPost(data, this.artID);
  //     console.log(this.articleDetailsFeedbacks);
  //   //this.insertStatus = 
    

  // }

  OnFeedbackPost() {
    
    this.articleFeedbackText = this.txtFeedbck;
    this.artID = +this.articleID;
    this.rating = this.currentRate;
    console.log(this.rating);
    
    let data =
      {
        "_postinsertarticlefeedback":
        {
          "rating": this.rating,
          "article_comment": this.articleFeedbackText,
          "article_id": this.artID,
          "username": this.userName,
          "user_id": this.userID
        }
      }
      this.articleService.insertFeedbackPost(data).subscribe((data)=>
      {
        console.log(data);
        this.getArticleFeedback()this.artID);
      },
      (err) => {        
        alert(err);
      }
  }
    

  }




