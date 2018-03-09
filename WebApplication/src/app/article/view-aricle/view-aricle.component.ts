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
  articleFeedbackText: string;
//  txtFeedbck : any = "";
  artID: number;
  insertStatus: any;


  constructor(private articleService: ArticleService, private router: Router) {
  }

  ngOnInit() {

    this.articleService.getArticleDetailsById(this.articleID).subscribe((res: Response) => {
      this.result = res;
      this.articleDetailsData = this.result.entries.entry[0];
      console.log(this.articleDetailsData);
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
}

